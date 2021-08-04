import React, { useEffect } from "react"
import UsersDisplay from '../components/UsersDisplay'

import { useSelector, useDispatch } from "react-redux"
import { getUsers } from '../store/adminUser'
import { Link } from "react-router-dom"

import style from "../styles/home.module.css"

const User = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const users = useSelector(state => state.adminUsers)

    return (
        <div className = {style.container}>
            <h1>Display con los users y posibilidad de editarlos</h1>
            <hr />
            <Link to="/admin">volver al centro de admin</Link>
            <UsersDisplay users = {users} />
        </div>
    )
}

export default User;