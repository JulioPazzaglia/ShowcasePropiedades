import { React, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { userRegister, userLogout } from "../store/user"
import { getUsers } from "../store/adminUser"
import style from "../styles/home.module.css"

const Register = () => {

  const user = useSelector(state => state.user)
  const users = useSelector(state => state.adminUsers)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullname, setFullname] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    if(email && password && fullname){

      dispatch(getUsers())
      .then(()=>{
        if(users.find(element=>element.email===email)){
          alert("Este email ya esta registrado")
        }
        else{
          dispatch(userRegister({ email, password, fullname })).then(({ payload }) => {
            if (payload){ 
              alert("Fuiste registrado. Loggeate pra utilizar al maximo la pagina")
              setTimeout(() => history.push("/login"), 0)
            }
            else{alert("Los datos ingresados no son correctos")}
          })
        }
      })
    }
    else{
      alert("Por favor llena los datos")
    }
  }

  const handleLogout = () => {
    if (user.id) {
      dispatch(userLogout())
      alert("Fuiste deslogeado")
    }
  }

  return(
    <div>
      {user.id && (
        <div className = {style.login}>
          <h1>Por favor deslogeate para crear otra cuenta</h1> 
          <Link className={style.loggin} onClick={handleLogout}> Log out </Link>
        </div>
      )}
      {!user.id && (
        <div className = {style.login}>
          <h1>Registrate a la pagina</h1>
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
      )}
    </div>
  )
}

export default Register;