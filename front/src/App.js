import { React } from "react" //useEffect
import { Route, Switch } from "react-router"
// import axios from "axios"
// import { useDispatch, useSelector } from "react-redux"

// import { cookiesUser } from "./store/user"
import "./App.css"

//components
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SingleHouse from "./components/SingleHouse"
import Filter from "./components/Filter"
import Login from './components/Login'
import Register from './components/Register'

function App() {

  // const dispatch = useDispatch()
  // const isAdmin = useSelector(state => state.user)

  // useEffect(() => {
  //   axios
  //     .get("api/me")
  //     .then(res => res.data)
  //     .then(user => {
  //       dispatch(cookiesUser(user))
  //     })
  // }, [dispatch])

  return ( 
    <div>
      <Sidebar />
          
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/propiedades/:id"
          render={({ match }) => <SingleHouse PropiedadId={match.params.id} />}
        />
        <Route
          path="/find/:key/:filtro"
          render={({ match }) => <Filter params = {match.params}/>}
        />
        <Route
          path="/login"
          render={() => <Login/>}
        />
        <Route
          path="/register"
          render={() => <Register/>}
        />
      </Switch>

      <Footer/>
    </div>
    )
}
  
// recordar poner solo para admin la ruta de comics
  
export default App
