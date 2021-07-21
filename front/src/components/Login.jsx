import { React, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { userLogin } from "../store/user"
import style from "../styles/home.module.css"

const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    dispatch(userLogin({ email, password })).then(({ payload }) => {
      if (payload) {
        alert("Bienvenido!")
        setTimeout(() => history.push("/"), 0)
      }
      else{alert("Los datos ingresados no son correctos")}
    })
  }

  return(
    <div className = {style.login}>
      <form onSubmit={handleClick}>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <hr/>

        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <hr />
        <div className={style.buttons}>
          <button className={style.button}>
          {" "}Log In{" "}
          </button>
        </div>
      </form>
      <h3>No tenes una cuenta?</h3>
      <br />
      <Link to= "/register">Registrate</Link>
    </div>
  )
}

export default LogIn;