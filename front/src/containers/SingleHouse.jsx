import React, { useEffect } from "react"
import style from "../styles/home.module.css"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getCasa } from "../store/casa"

const SingleHouse= (props) => {

    const id = props.PropiedadId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCasa(id))
    }, [dispatch, id])

    const casaShow = useSelector(state => state.casa)

    return (
        <div className = {style.container}>
            <h1>{casaShow.name}</h1>
            <hr />
            <img className = {style.imageDisplay} src = {`${casaShow.image}`} alt="casa" /> 
            <h3>Precio: usd ${casaShow.price}</h3>
            <h3>{casaShow.description}</h3>
            <Link to="/">Volver al home</Link>
        </div>
    )
}

export default SingleHouse