import React, {useState} from "react"

import style from "../styles/home.module.css"

const HouseEdit= (props) => {

    var casa = props.propiedad;
    const Cambio = props.Cambio;
    const Eliminar = props.PropiedadesDelete;

    const [name, setName] = useState(casa.name)
    const [description, setDescription] = useState(casa.description)
    const [price, setPrice] = useState(casa.price)
    const [location, setLocation] = useState(casa.location)
    const [available, setAvailable] = useState(casa.available)
    const [password, setPassword] = useState("")

    const check = () => {
        var body = {id: casa.id}
        name? body.name = name: body.name = casa.name;
        description? body.description = description: body.description = casa.description;
        price? body.price = price: body.price = casa.price;
        location? body.location = location: body.location = casa.location;
        available? body.available = available: body.available = casa.available;
        
        Cambio(body)
    }

    return (
        <div className = {style.edit}>
            <div className = {style.input}>
                <input
                    type="text"
                    name="name"
                    placeholder={casa.name}
                    onChange={e => setName(e.target.value)}
                />
                <input className = {style.description}
                    type="text"
                    name="description"
                    placeholder={casa.description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    type="interger"
                    name="price"
                    placeholder={casa.price}
                    onChange={e => setPrice(e.target.value)}
                />
                <select onChange={e => setLocation(e.target.value)}>
                    <option selected = {casa.location==="Belgrano"?true:false} value="Belgrano">Belgrano</option>
                    <option selected = {casa.location==="Palermo"?true:false} value="Palermo">Palermo</option>
                    <option selected = {casa.location==="Recoleta"?true:false} value="Recoleta">Recoleta</option>
                    <option selected = {casa.location==="Retiro"?true:false} value="Retiro">Retiro</option>
                </select>
                <select onChange={e => setAvailable(e.target.value)}>
                    <option selected = {casa.available?true:false} value={true}>True</option>
                    <option selected = {!casa.available?true:false} value={false}>False</option>
                </select>
                <div className={style.buttons}>
                    <button className={style.change} onClick = {check}>
                        {" "}Establecer cambios{" "}
                    </button>
                </div>
                <form className={style.buttons} onSubmit={(e) => Eliminar(casa.id, password, e)}>
                    <p>Eliminar: </p>
                    <input
                        type="text"
                        name="name"
                        placeholder= "Escibi 'delete' para eliminarlo"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className={style.buttons}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default HouseEdit;