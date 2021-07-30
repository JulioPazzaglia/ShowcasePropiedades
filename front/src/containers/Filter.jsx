import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getFiltered, getByLocation } from "../store/propiedades"
import HouseDisplay from "../components/HouseDisplay"

import style from "../styles/home.module.css"

const Filter = (props) => {
    const Key = props.params.key
    const Filter = props.params.filtro
    const [minMax, setminMax] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        if(Key === "category" ){
            dispatch(getFiltered(Filter))
        }
        else{
            dispatch(getByLocation(Filter))
        }
    }, [dispatch, Filter, Key])

    const casas = useSelector(state => state.propiedades)
  
    const changeMinMax = () => {
        setminMax(!minMax)
    }

    return(
        <div className = {style.container}>
            <h1>casas filtradas:</h1>
            <button className={style.minMax} onClick = {changeMinMax} >{minMax?"⬇":"⬆"}</button>
            <HouseDisplay propiedades ={casas} filtro = {minMax} />
        </div>
    )
}

export default Filter;