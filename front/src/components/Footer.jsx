import React from "react"
import style from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={style.footer}>
        <div>
          <h5>Telefono: +54 123456789</h5>
          <h5>Email: something@something.com</h5>
        </div>
        <h4>Sup Propiedades</h4>
        <div className={style.logos}>
          <img className={style.image} src="https://icons-for-free.com/iconfiles/png/512/gray+instagram+icon-1320168274872779520.png" alt="Logo instagram"/>
          <img className={style.image} src="https://www.pngkey.com/png/full/381-3818528_aaron-carolyn-facebook-icon-gray-vector.png" alt="Logo facebook"/>
        </div>
    </div>
  )
}

export default Footer