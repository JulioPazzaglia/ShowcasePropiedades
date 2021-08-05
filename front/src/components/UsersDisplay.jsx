import React, { useState } from "react"

import style from "../styles/home.module.css"

const UserEdit= (props) => {

    const users = props.users
    const AdminToggle = props.AdminToggle
    const UserDelete = props.UserDelete

    const [password, setPassword] = useState("")

    return (
        <div>
            {!users.length>0 && <h1>No parecen haber users</h1>}
            {typeof(users)==="object" && users.map((user)=>{
                return (
                    <div>
                        <hr />
                        <div key={user.id} className = {style.display}>
                            <div className = {style.variant}>
                                <p className = {style.hola} >Nombre de usuario: {user.fullname}</p>
                                <p className = {style.hola}>Email de usuario: {user.email}</p>
                                <p className = {style.hola}>ID: {user.id}</p>
                            </div>
                            <hr />
                            <div className = {style.item}>
                                <button className={style.buttons} onClick={()=> {AdminToggle(user.id)}}>{user.isAdmin?"Remove admin":"Make admin"}</button>
                                <hr />
                                <form className={style.buttons}>
                                    <p>Eliminar: </p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder= "Escibi 'delete' para eliminarlo"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <button className={style.buttons} onClick={()=> {UserDelete(user.id, password)}}>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserEdit;