import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getPropiedades = createAsyncThunk("GET_PROPIEDADES", () => {
  return axios.get("/api/propiedades").then(res => res.data)
})

export const getFiltered = createAsyncThunk("GET_FILTERED", (filter)=>{
  return axios.get(`/api/category/${filter}`).then(res => res.data)
})

const propiedadesReducer = createReducer([], {
  [getPropiedades.fulfilled]: (state, action) => action.payload,
  [getFiltered.fulfilled]: (state, action) => action.payload,
})

export default propiedadesReducer
