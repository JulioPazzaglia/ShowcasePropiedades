import React from "react"
import { Link } from "react-router-dom"

import style from "../styles/home.module.css"

const HouseDisplay= (props) => {

    const propiedades = props.props

    return (
        <div>
            {propiedades.map((casa)=>{
                return (
                    <div key={casa.id}>
                        <hr />
                        <div className = {style.display}>
                            <div className = {style.item}>
                                <img className = {style.image} src = {`${casa.image}`} alt="casa" /> 
                            </div>
                            <div className = {style.item}>
                                <Link to={`/propiedades/${casa.id}`}><h1>{casa.availableName}</h1></Link>
                                <div className={style.buttons}>
                                    <h2>Precio: usd ${casa.price}</h2>
                                    <h5>{casa.truncate}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseDisplay;