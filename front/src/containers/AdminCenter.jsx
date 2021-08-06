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
            <h1>Aca estan las funciones de admin:</h1>
            <h2>En caso de no estar loggeado ingresa a una cuenta de administracion</h2>

            {user.isAdmin && (
                <div className={style.links}>
                    <Link to="/users" className = {style.display}>Editar los users</Link>
                    <hr />
                    <Link to="/editHouses" className = {style.display}>Editar las propiedades</Link>
                    {/* <hr /> */}
                    {/* <Link to="/create" className = {style.display}>Crear propiedades</Link> */}
                </div>
            )}
            {user.id && !user.isAdmin && (
                <div className={style.admin}>
                    <form onSubmit={handleClick} className = {style.buttons} >
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button>
                            {" "}Make Admin{" "}
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default AdminCenter;