import React from "react"
import style from "../styles/footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className={style.footer}>
        <div>
          <h5>Telefono: +54 123456789</h5>
          <h5>Email: something@something.com</h5>
        </div>
        <div className={style.centro}>
          <h3 className={style.centro}>Sup Propiedades</h3>
          <hr />
          <Link to='/admin'><h7>Ajustes</h7></Link>
        </div>
        <div className={style.logos}>
          <img className={style.image} src="https://icons-for-free.com/iconfiles/png/512/gray+instagram+icon-1320168274872779520.png" alt="Logo instagram"/>
          <img className={style.image} src="https://www.pngkey.com/png/full/381-3818528_aaron-carolyn-facebook-icon-gray-vector.png" alt="Logo facebook"/>
        </div>
    </div>
  )
}

export default Footer