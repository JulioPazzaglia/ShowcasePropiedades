// import React, {useState} from "react"
// // import { create } from "../../../back/models/category";

// import style from "../styles/home.module.css"

// const HouseCreate= (props) => {

//     const Create = props.Create;

//     const [name, setName] = useState("")
//     const [description, setDescription] = useState("")
//     const [price, setPrice] = useState(0)
//     const [location, setLocation] = useState("")
//     const [available, setAvailable] = useState(true)
//     const [category, setCategory] = useState("")

//     return (
//         <div className = {style.edit}>
//             <div className = {style.input}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Nombre de la propiedad"
//                     onChange={e => setName(e.target.value)}
//                 />
//                 <input className = {style.description}
//                     type="text"
//                     name="description"
//                     placeholder="Descripcion de la propiedad"
//                     onChange={e => setDescription(e.target.value)}
//                 />
//                 <input
//                     type="interger"
//                     name="price"
//                     placeholder="Precio"
//                     onChange={e => setPrice(e.target.value)}
//                 />
//                 <select onChange={e => setLocation(e.target.value)}>
//                     <option value="Belgrano">Belgrano</option>
//                     <option value="Palermo">Palermo</option>
//                     <option value="Recoleta">Recoleta</option>
//                     <option value="Retiro">Retiro</option>
//                 </select>
//                 <select onChange={e => setAvailable(e.target.value)}>
//                     <option value={true}>True</option>
//                     <option value={false}>False</option>
//                 </select>
//                 <select onChange={e => setCategory(e.target.value)}>
//                     <option value="Categoria 1">Categoria 1</option>
//                     <option value="Categoria 2">Categoria 2</option>
//                     <option value="categoria 3">Categoria 3</option>
//                     <option value="Categoria 4">Categoria 4</option>
//                 </select>
//                 <div className={style.buttons}>
//                     <button className={style.change} 
//                     // onClick = {Create({
//                     //     name: name,
//                     //     description: description,
//                     //     price: price,
//                     //     location: location,
//                     //     available: available,
//                     //     category: category
//                     // })}
//                     >
//                         {" "}Crear propiedad{" "}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HouseCreate;