import { React, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { userRegister } from "../store/user"
import style from "../styles/home.module.css"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullname, setFullname] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    dispatch(userRegister({ email, password, fullname })).then(({ payload }) => {
      if (payload){ 
        alert("Fuiste registrado. Loggeate pra utilizar al maximo la pagina")
        setTimeout(() => history.push("/login"), 0)
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

        <input
          type="text"
          name="Fullname"
          placeholder="Fullname"
          onChange={e => setFullname(e.target.value)}
        />
        <br />
        <hr />

        <div className={style.buttons}>
          <button className={style.button}>
          {" "}Register{" "}
          </button>
        </div>
      </form>
      <h3>Ya tenes una cuenta?</h3>
      <br />
      <Link to= "/login">Log in</Link>
    </div>
  )
}

export default Register;