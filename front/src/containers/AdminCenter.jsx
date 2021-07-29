import React from "react" //, { useEffect } 
import { Link } from "react-router-dom"

import { useSelector} from "react-redux"
// import { getPropiedades } from "../store/propiedades"
// import HouseDisplay from "../containers/HouseDisplay"

import style from "../styles/home.module.css"

const AdminCenter = () => {

    const isAdmin = useSelector(state => state.user.isAdmin)

    return (
        <div className = {style.container}>
            <h1>Aca van a estar los links para todas las funciones admin</h1>
            <h2>Capaz tambien va a estar un input para una contrasenia para entrar sin tener "isAdmin"</h2>

            {isAdmin && (
                <div>
                    <Link to="/users" className = {style.display}>Editar los users</Link>
                    <Link to="/users" className = {style.display}>Editar las propiedades</Link>
                </div>
            )}
        </div>
    )
}

export default AdminCenter;