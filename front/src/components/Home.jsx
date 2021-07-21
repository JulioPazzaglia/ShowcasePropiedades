import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getPropiedades } from "../store/propiedades"

import style from "../styles/home.module.css"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPropiedades())
    }, [dispatch])

    const propiedades = useSelector(state => state.propiedades)

    return (
        <div className = {style.container}>
            <h1>Aca va a mostrar todos las propiedades</h1>
            <br />
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
                                    <Link to={`/propiedades/${casa.id}`}><h1>{casa.name}</h1></Link>
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
        </div>
    )
}

export default Home;