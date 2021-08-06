import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const postPropiedades = createAsyncThunk("POST_PROPIEDADES", (body)=>{
    return axios.post(`/api/propiedades/create`, body).then(res => res.data)
})

const adminPropiedadesReducer = createReducer([], {
    [postPropiedades.fulfilled]: (state, action) => action.payload,
})

export default adminPropiedadesReducer;