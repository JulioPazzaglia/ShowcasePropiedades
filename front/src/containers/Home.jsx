import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { getPropiedades } from "../store/propiedades"
import { putFavs, deleteFavs } from "../store/favorites"

import HouseDisplay from "../components/HouseDisplay"

import style from "../styles/home.module.css"

const Home = () => {
    const dispatch = useDispatch()
    const [minMax, setminMax] = useState(true)

    useEffect(() => {
        dispatch(getPropiedades())
    }, [dispatch])

    const propiedades = useSelector(state => state.propiedades)

    const changeMinMax = () => {
        setminMax(!minMax);
    }

    //logica de favoritos
    const AddFavs = (houseid, userid)=>{
        var body = {userId: userid, houseId: houseid}
        dispatch(putFavs(body))
        .then(()=>dispatch(getPropiedades()))
    }
    const DelFavs = (houseid, userid)=>{
        var body = {userId: userid, houseId: houseid}
        dispatch(deleteFavs(body))
        .then(()=>dispatch(getPropiedades()))
    }

    return (
        <div className = {style.container}>
            <h1>Todas las propiedades nuestras:</h1>
            <button className={style.minMax} onClick = {changeMinMax} >{minMax?"⬇":"⬆"}</button>
            <HouseDisplay propiedades ={propiedades} filtro = {minMax} AddFavs={AddFavs} DelFavs={DelFavs}/>
        </div>
    )
}

export default Home;