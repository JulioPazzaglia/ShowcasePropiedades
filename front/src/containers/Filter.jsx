import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getFiltered, getByLocation } from "../store/propiedades"
import HouseDisplay from "../components/HouseDisplay"

import style from "../styles/home.module.css"

const Filter = (props) => {
    const Key = props.params.key
    const Filter = props.params.filtro

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

    return(
        <div className = {style.container}>
            <h1>casas filtradas</h1>
            <HouseDisplay props ={casas}/>
        </div>
    )
}

export default Filter;