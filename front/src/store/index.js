import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import propiedadesReducer from "./propiedades"
import casaReducer from "./casa"
import categoryReducer from "./categorys"

const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
    casa: casaReducer,
    user: userReducer,
    category: categoryReducer,
  }
})

export default store