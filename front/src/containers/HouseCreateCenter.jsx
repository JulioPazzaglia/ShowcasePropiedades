// import React from "react"
// import style from "../styles/home.module.css"
// import { Link} from "react-router-dom"

// // import HouseEdit from "../components/HouseEdit"
// // import { putCasa } from "../store/casa"

// // import { useSelector, useDispatch } from "react-redux"
// // import { getCasa } from "../store/casa"
// import HouseCreate from "../components/HouseCreator"

// const houseCreate= (props) => {

//     // const id = props.PropiedadId;

//     // const dispatch = useDispatch();

//     // useEffect(() => {
//     //     dispatch(getCasa(id))
//     // }, [dispatch, id])

//     // const casaShow = useSelector(state => state.casa)

//     // const history = useHistory();

//     // const Cambio = (body) => {
//     //     dispatch(putCasa(body))
//     //     .then(()=> history.push(`/editHouses`))
//     // }

//     return (
//         <div className = {style.container}>
//             <h1>Centro de creacion de propiedades</h1>
//             <hr />
//             <Link to="/editHouses" className = {style.display}>Volver a seleccionar las casas para editar</Link>
//             <hr />
//             <HouseCreate/>
//         </div>
//     )
// }

// export default HouseCreate;