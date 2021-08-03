import React, { useState } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch} from "react-redux"
import { putAdmin } from "../store/adminUser"

import style from "../styles/home.module.css"

const AdminCenter = () => {

    const user = useSelector(state => state.user)
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleClick = e=>{
        e.preventDefault()
        if(password === "Admin12"){
            dispatch(putAdmin(user.id))
            window.location.reload()
        }
        else{
            alert("contrasenia incorrecta")
        }
        e.target[0].value = '';
    }

    return (
        <div className = {style.container}>
            <h1>Aca van a estar los links para todas las funciones admin</h1>
            <h2>Capaz tambien va a estar un input para una contrasenia para entrar sin tener "isAdmin"</h2>

            {user.isAdmin && (
                <div>
                    <Link to="/users" className = {style.display}>Editar los users</Link>
                    <Link to="/users" className = {style.display}>Editar las propiedades</Link>
                </div>
            )}
            {user.id && !user.isAdmin && (
                <div className={style.admin}>
                    <form onSubmit={handleClick}>
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>
                            <button className={style.minMax}>
                            {" "}Make Admin{" "}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default AdminCenter;