import React from "react"
import { Link } from "react-router-dom"
import { useSelector} from "react-redux"


import style from "../styles/home.module.css"

const HouseDisplay= (props) => {
    
    const user = useSelector(state => state.user)

    var propiedadesRaw = props.propiedades
    var propiedades = propiedadesRaw.slice(0,propiedadesRaw.length)
    
    const filtro = props.filtro
    const addFavs = props.AddFavs
    const delFavs = props.DelFavs

    filtro?propiedades.sort((firstItem, secondItem) => secondItem.price - firstItem.price):propiedades.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
    

    return (
        <div>
            {!propiedades.length>0&& <h1>No parecen haber propiedades</h1>}
            {propiedades.length>0 && propiedades.map((casa)=>{
                return (
                    <div key={casa.id}>
                            <hr />
                            <div className = {style.display}>
                                <div className = {style.item}>
                                    <Link to={`/propiedades/${casa.id}`}>
                                        <img className = {style.image} src = {`${casa.image}`} alt="casa" /> 
                                    </Link>
                                </div>
                                <div className = {style.item}>
                                    <Link to={`/propiedades/${casa.id}`}><h1>{casa.availableName}</h1></Link>
                                    <div className={style.buttons}>
                                        <h2>Precio: usd ${casa.price}</h2>
                                        <h5>{casa.truncate}</h5>
                                    </div>
                                    { casa.users.find(element=>element.id===user.id) && (
                                        <button 
                                        className={style.buttons} onClick={()=> {delFavs(casa.id, user.id)}}>Eliminar de favoritos</button>
                                    )}
                                    { !casa.users.find(element=>element.id===user.id) && (
                                        <button className={style.buttons} onClick={()=>{user.id?addFavs(casa.id, user.id):alert("necesitas estar loggeado para agregar propiedades a favoritos")}} >Agregar a favoritos</button>
                                    )}
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseDisplay;