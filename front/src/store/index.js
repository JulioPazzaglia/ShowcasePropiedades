import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import propiedadesReducer from "./propiedades"
import casaReducer from "./casa"
import categoryReducer from "./categorys"

//admin side
import adminUserReducer from "./adminUser"

const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
    casa: casaReducer,
    user: userReducer,
    category: categoryReducer,
    adminUsers: adminUserReducer,
  }
})

export default store