import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { getFiltered, getByLocation, getByFavs } from "../store/propiedades"
import { putFavs, deleteFavs } from "../store/favorites"

import HouseDisplay from "../components/HouseDisplay"

import style from "../styles/home.module.css"

const Filter = (props) => {
    const Key = props.params.key
    const Filter = props.params.filtro
    const [minMax, setminMax] = useState(true)

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if(Key === "category" ){
            dispatch(getFiltered(Filter))
        }
        else if(Key === "favorites"){
            dispatch(getByFavs(user.id))
        }
        else{
            dispatch(getByLocation(Filter))
        }
    }, [dispatch, Filter, Key, user])

    const casas = useSelector(state => state.propiedades)
  
    //Filter manager
    const changeMinMax = () => {
        setminMax(!minMax)
    }


    //favorites manager
    const AddFavs = (houseid, userid)=>{
        var body = {userId: userid, houseId: houseid}
        dispatch(putFavs(body))
        .then(()=>dispatchMan())
    }
    const DelFavs = (houseid, userid)=>{
        var body = {userId: userid, houseId: houseid}
        dispatch(deleteFavs(body))
        .then(()=>dispatchMan())
    }

    //dispatch manager
    const dispatchMan = ()=>{
        if(Key === "category" ){
            dispatch(getFiltered(Filter))
        }
        else if(Key === "favorites"){
            dispatch(getByFavs(user.id))
        }
        else{
            dispatch(getByLocation(Filter))
        }
    }

    return(
        <div className = {style.container}>
            <h1>casas filtradas:</h1>
            <button className={style.minMax} onClick = {changeMinMax} >{minMax?"⬇":"⬆"}</button>
            <HouseDisplay propiedades ={casas} filtro = {minMax} AddFavs={AddFavs} DelFavs={DelFavs}/>
        </div>
    )
}

export default Filter;