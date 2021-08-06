import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import propiedadesReducer from "./propiedades"
import casaReducer from "./casa"
import categoryReducer from "./categorys"
import favoritesReducer from "./favorites"

//admin side
import adminUserReducer from "./adminUser"
import adminPropiedadesReducer from "./adminPropiedades"

const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
    casa: casaReducer,
    user: userReducer,
    category: categoryReducer,
    adminUsers: adminUserReducer,
    favorites: favoritesReducer,
    adminPropiedades: adminPropiedadesReducer,
  }
})

export default store