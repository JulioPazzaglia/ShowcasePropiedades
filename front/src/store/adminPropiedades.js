import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const postPropiedades = createAsyncThunk("POST_PROPIEDADES", (body)=>{
    return axios.post(`/api/propiedades/create`, body).then(res => res.data)
})
export const deletePropiedades = createAsyncThunk("DELETE_PROPIEDADES", (id)=>{
    return axios.delete(`/api/propiedades/delete/${id}`).then(res => res.data)
})

const adminPropiedadesReducer = createReducer([], {
    [postPropiedades.fulfilled]: (state, action) => action.payload,
    [deletePropiedades.fulfilled]: (state, action) => action.payload,
})

export default adminPropiedadesReducer;