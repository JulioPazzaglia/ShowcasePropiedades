import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import style from "../styles/home.module.css"

const HouseDisplay= (props) => {

    const user = useSelector(state => state.user)

    var propiedadesRaw = props.propiedades
    const filtro = props.filtro
    var propiedades = propiedadesRaw.slice(0,propiedadesRaw.length)

    filtro?propiedades.sort((firstItem, secondItem) => secondItem.price - firstItem.price):propiedades.sort((firstItem, secondItem) => firstItem.price - secondItem.price)

    return (
        <div>
            {propiedades.map((casa)=>{
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
                                        className={style.buttons} 
                                        onClick={()=> {
                                            console.log(`agrega a estos house: ${casa.id}, user: ${user.id}`)
                                        }}
                                        >
                                            Eliminar de favoritos
                                        </button>
                                    )}
                                    { !casa.users.find(element=>element.id===user.id) && (
                                        <button className={style.buttons} onClick={()=>{console.log("Click! agrega")}}>Agregar a favoritos</button>
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