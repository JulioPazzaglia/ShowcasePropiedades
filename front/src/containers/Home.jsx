import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getPropiedades } from "../store/propiedades"
import HouseDisplay from "../components/HouseDisplay"

import style from "../styles/home.module.css"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPropiedades())
    }, [dispatch])

    const propiedades = useSelector(state => state.propiedades)

    return (
        <div className = {style.container}>
            <h1>Todas las propiedades nuestras:</h1>
            <br />
            <HouseDisplay props ={propiedades}/>
        </div>
    )
}

export default Home;