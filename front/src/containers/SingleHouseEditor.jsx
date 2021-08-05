import React, { useEffect } from "react"
import style from "../styles/home.module.css"
import { Link, useHistory } from "react-router-dom"

import HouseEdit from "../components/HouseEdit"
import { putCasa } from "../store/casa"

import { useSelector, useDispatch } from "react-redux"
import { getCasa } from "../store/casa"

const SingleHouseEditor= (props) => {

    const id = props.PropiedadId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCasa(id))
    }, [dispatch, id])

    const casaShow = useSelector(state => state.casa)

    const history = useHistory();

    const Cambio = (body) => {
        dispatch(putCasa(body))
        .then(()=> history.push(`/editHouses`))
    }

    return (
        <div className = {style.container}>
            <h1>{casaShow.name} es el editor de esta casa</h1>
            <hr />
            <Link to="/editHouses" className = {style.display}>Volver a seleccionar las casas para editar</Link>
            <hr />
            <HouseEdit propiedad = {casaShow} Cambio = {Cambio}/>
        </div>
    )
}

export default SingleHouseEditor;