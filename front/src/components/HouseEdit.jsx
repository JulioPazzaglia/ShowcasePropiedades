import React, {useState} from "react"
// import { Link } from "react-router-dom"
// import { useSelector} from "react-redux"


import style from "../styles/home.module.css"

const HouseEdit= (props) => {

    var casa = props.propiedad;
    const Cambio = props.Cambio;

    const [name, setName] = useState(casa.name)
    const [description, setDescription] = useState(casa.description)
    const [price, setPrice] = useState(casa.price)
    const [location, setLocation] = useState(casa.location)
    const [available, setAvailable] = useState(casa.available)


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
                        {" "}Register{" "}
                    </button>
                </div>
            </div>
        </div>
    )
}
/*
"availableName": "Quartier Demaria Godoy Cruz al 3000",
"id": 2,
"name": "Quartier Demaria Godoy Cruz al 3000",
"description": "Alquiler 4 ambientes, tres dormitorios, uno en suite, living comedor, cocina, comedor diario, dependencia de servicio. Cochera fija.Exclusivo complejo compuesto por dos torres de 27 pisos ubicado en Palermo Nuevo. Quartier Demaria fue la primera de la marca Quartier constituyendo un Hito de la marca en los años 90.",
"truncate": "Alquiler 4 ambientes, tres dor...",
"price": 125000,
"location": "Palermo",
"image": "https://imgar.zonapropcdn.com/avisos/1/00/45/50/08/35/1200x1200/1713699779.jpg",
"available": true,
"createdAt": "2021-08-03T17:21:56.345Z",
"updatedAt": "2021-08-03T17:21:56.345Z",
"users": []
*/

export default HouseEdit;