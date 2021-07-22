import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getCategorys } from "../store/categorys"
import { userLogout } from '../store/user'

import styles from "../styles/sidebar.module.css"

const Sidebar = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    if (user.id) dispatch(userLogout())
  }
  useEffect(() => {
    dispatch(getCategorys())
  }, [dispatch])

  const categorys = useSelector(state => state.category)

  return (
    <div className= "col-xs-2">
      <div className={styles.sidebar}>
        {/* Contenidos y filtros de sidebar */}
        <h1><Link to = '/'>Sup Propiedades</Link></h1>

        {/* Foto pero no esta andando */}
        <section>
          <image src={'https://st.depositphotos.com/1353542/2505/i/600/depositphotos_25050079-stock-photo-logo-a-house-with-a.jpg'} alt="Logo de la empresa"/>
        </section>
        <br />
        <hr/>

        {/* categorias */}
        <section>
          <h2>Categorias</h2>
          {categorys.map((cat)=>{
            return (
              <p key={cat.id}>
                <Link to= {`/find/category/${cat.name}`}>{cat.name}</Link>
              </p>
            )})
          }
        </section>
        <br />
        <hr/>

        {/* Locacion */}
        <section>
          <h2>Locacion</h2>
          <p>
            <Link to= {`/find/location/Belgrano`}>Belgrano</Link>
          </p>
          <p>
            <Link to= {`/find/location/Palermo`}>Palermo</Link>
          </p>
          <p>
            <Link to= {`/find/location/Recoleta`}>Recoleta</Link>
          </p>
          <p>
            <Link to= {`/find/location/Retiro`}>Retiro</Link>
          </p>
        </section>

      {/* Logging and such */}
      <div className={styles.log}>
        <Link className={styles.loggin} to={`/${user.id ? "" : "login"}`} onClick={handleLogout}> {user.id ? "Log out" : "Log in"} </Link>
        <Link className={styles.loggin} to="/register"> Register </Link>
      </div>
    </div>
  </div>
  )
}

export default Sidebar