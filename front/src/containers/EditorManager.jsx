import React, { useEffect } from "react"
// import HouseEdit from "../components/HouseEdit"

import { useSelector, useDispatch } from "react-redux"
import { getPropiedades } from "../store/propiedades"
import { Link } from "react-router-dom"

import style from "../styles/home.module.css"

const AdminCenter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPropiedades())
    }, [dispatch])

    const propiedadesRaw = useSelector(state => state.propiedades)

    var propiedades = propiedadesRaw.slice(0,propiedadesRaw.length)

    propiedades.sort((firstItem, secondItem) => firstItem.id - secondItem.id)

    return (
        <div className = {style.container}>
            <h1>Display con las propiedades y posibilidad de editarlos</h1>
            <hr />
            <Link to="/admin">volver al centro de admin</Link>
            <hr />
            <div>
                {propiedades.length>0 && propiedades.map((casa)=>{
                        return (
                            <div className= {style.links}>
                                <Link to={`/edit/propiedades/${casa.id}`} className = {style.display}>{`Id: ${casa.id}, Nombre: ${casa.name}, Disponibilidad: ${casa.available}`}</Link>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default AdminCenter;