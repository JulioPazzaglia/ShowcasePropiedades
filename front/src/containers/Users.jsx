import React, { useEffect } from "react"
import UsersDisplay from '../components/UsersDisplay'

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { getUsers, putAdmin, delUser } from '../store/adminUser'

import style from "../styles/home.module.css"

const User = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const AdminToggle = (id) => {
        if(user.id===id){
            alert("No puede quitarse privilegios de admin a uno mismo")
        }
        else{
            dispatch(putAdmin(id))
            .then(()=>dispatch(getUsers()))
        }
    }

    const UserDelete = (id, password) => {
        if(user.id===id){
            alert("No podes eliminarte a vos mismo")
        }
        else if(password==="delete"){
            dispatch(delUser(id))
            .then(()=>{
                dispatch(getUsers())
            })
            alert("Usuario eliminado")
        }
        else{
            alert("Contraseña incorrecta")
        }
    }

    const users = useSelector(state => state.adminUsers)

    return (
        <div className = {style.container}>
            <h1>Display con los users y posibilidad de editarlos</h1>
            <hr />
            <Link to="/admin">volver al centro de admin</Link>
            {<UsersDisplay users = {users} AdminToggle = {AdminToggle} UserDelete = {UserDelete}/>}
        </div>
    )
}

export default User;