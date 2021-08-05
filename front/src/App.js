import { React, useEffect } from "react" //useEffect
import { Route, Switch } from "react-router"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux" //useDispatch

import { cookiesUser } from "./store/user"
import "./App.css"

//components
import Sidebar from "./containers/Sidebar"
import Footer from "./containers/Footer"
import Home from "./containers/Home"
import SingleHouse from "./containers/SingleHouse"
import Filter from "./containers/Filter"
import Login from './containers/Login'
import Register from './containers/Register'
import AdminCenter from "./containers/AdminCenter"
import Users from "./containers/Users"
import HousesEditor from "./containers/EditorManager"
import SingleHouseEditor from "./containers/SingleHouseEditor"
// import HouseCreateCenter from "./containers/HouseCreateCenter"

function App() {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user)

  useEffect(() => {
    axios
      .get("api/me")
      .then(res => res.data)
      .then(user => {
        dispatch(cookiesUser(user))
      })
  }, [dispatch])

  return ( 
    <div>
      <Sidebar />
          
      <Switch>
      <Route
          exact path="/"
          render={() => <Home/>}
        />
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
        <Route
          path="/admin"
          render={() => <AdminCenter/>}
        />
        {isAdmin && 
        <Route
          path="/users"
          render={() => <Users/>}
        />
        }
        {isAdmin && 
        <Route
          path="/editHouses"
          render={() => <HousesEditor/>}
        />
        }
        {isAdmin && 
        <Route
          path="/edit/propiedades/:id"
          render={({ match }) => <SingleHouseEditor PropiedadId={match.params.id} />}
        />
        }
        {isAdmin && 
        <Route
          path="/create"
          // render={() => <HouseCreateCenter/>}
        />
        }
      </Switch>

      <Footer/>
    </div>
    )
}
  
export default App
