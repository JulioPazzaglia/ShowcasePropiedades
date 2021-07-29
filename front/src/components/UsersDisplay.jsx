import React from "react"
// import { Link } from "react-router-dom"

import style from "../styles/home.module.css"

const HouseDisplay= (props) => {

    const users = props.users

    return (
        <div>
            {users.map((user)=>{
                return (
                    <div>
                        <hr />
                        <div key={user.id} className = {style.display}>
                            <h1 className = {style.item}>Nombre de usuario: {user.fullname}</h1>
                            <hr />
                            <div className = {style.item}>
                                <h2>Email de usuario: {user.email}</h2>
                                <h2>ID: {user.id}</h2>
                                <h2>IsAdmin: {String(user.isAdmin)}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseDisplay;