import React, { useEffect } from "react"
import style from "../styles/home.module.css"
import { Link, useHistory } from "react-router-dom"

import HouseEdit from "../components/HouseEdit"
import { putCasa, getCasa } from "../store/casa"
import {deletePropiedades} from "../store/adminPropiedades"

import { useSelector, useDispatch } from "react-redux"

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

    const PropiedadesDelete = (id, password, e) => {
        e.preventDefault();

         if(password==="delete"){
            dispatch(deletePropiedades(id))
            .then(()=> history.push(`/editHouses`))
        }
        else{
            alert("Contraseña incorrecta")
        }
        e.target.children[1].value = "";
    }

    return (
        <div className = {style.container}>
            <h1>{casaShow.name} es el editor de esta casa</h1>
            <hr />
            <Link to="/editHouses" className = {style.display}>Volver a seleccionar las casas para editar</Link>
            <hr />
            <HouseEdit propiedad = {casaShow} Cambio = {Cambio} PropiedadesDelete = {PropiedadesDelete}/>
        </div>
    )
}

export default SingleHouseEditor;