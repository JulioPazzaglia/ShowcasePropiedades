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
                            <div className = {style.variant}>
                                <p className = {style.hola} >Nombre de usuario: {user.fullname}</p>
                                <p className = {style.hola}>Email de usuario: {user.email}</p>
                                <p className = {style.hola}>ID: {user.id}</p>
                            </div>
                            <hr />
                            <div className = {style.item}>
                                <p>IsAdmin: {String(user.isAdmin)}</p>
                                <p>delete: {String(user.isAdmin)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseDisplay;