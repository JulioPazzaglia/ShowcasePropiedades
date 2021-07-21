import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getFiltered } from "../store/propiedades"

import style from "../styles/home.module.css"

const Filter = (props) => {
    const Filter = props.Filter

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFiltered(Filter))
    }, [dispatch, Filter])

  const casas = useSelector(state => state.propiedades)

    return(
        <div className = {style.container}>
            <h1>casas filtradas</h1>
            {casas.map((casa)=>{
                    return (
                        <div key={casa.id}>
                            <hr />
                            <div className = {style.display}>
                                <div className = {style.item}>
                                    <img className = {style.image} src = {`${casa.image}`} alt="casa" /> 
                                </div>
                                <div className = {style.item}>
                                    <Link to={`/propiedades/${casa.id}`}><h1>{casa.name}</h1></Link>
                                    <h2>Precio: usd ${casa.price}</h2>
                                    <h5>{casa.truncate}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Filter;