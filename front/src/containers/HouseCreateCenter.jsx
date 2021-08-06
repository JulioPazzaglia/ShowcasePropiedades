import React from "react"
import style from "../styles/home.module.css"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import HouseCreate from "../components/HouseCreator"

import {postPropiedades} from "../store/adminPropiedades"


const HouseCreator= () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const Create = (body, e) => {
        e.preventDefault()
        if(user.isAdmin){
            dispatch(postPropiedades(body))
            .then(()=>alert("La propiedad fue creada"))
        }
        else{
            alert("No tenes la autorizacion para crear propiedades")
        }
    }

    return (
        <div className = {style.container}>
            <h1> Creador de casa</h1>
            <hr />
            <Link to="/editHouses" className = {style.display}>Ver listado de propiedades</Link>
            <hr />
            <HouseCreate create = {Create} />
        </div>
    )
}

export default HouseCreator;