import React from "react"
import style from "../styles/home.module.css"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className={style.container}>
        <h1>Hubo un error</h1>
        <h2>Puede que la direccion que solicitaste no exista o no tengas la autorizacion para verla</h2>
        <Link to = "/">volver a la home page</Link>
    </div>
  )
}

export default Error