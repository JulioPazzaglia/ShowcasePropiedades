import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getPropiedades = createAsyncThunk("GET_PROPIEDADES", () => {
  return axios.get("/api/propiedades").then(res => res.data)
})

export const getFiltered = createAsyncThunk("GET_FILTERED", (filter)=>{
  return axios.get(`/api/category/${filter}`).then(res => res.data)
})

export const getByLocation = createAsyncThunk("GET_BY_LOCATION",(filter)=>{
  return axios.get(`/api/find/${filter}`).then(res => res.data)
})

export const getByFavs = createAsyncThunk("GET_BY_FAVS",(id)=>{
  return axios.get(`/api/favorites/${id}`).then(res => res.data)
}) 

const propiedadesReducer = createReducer([], {
  [getPropiedades.fulfilled]: (state, action) => action.payload,
  [getByLocation.fulfilled]: (state, action) => action.payload,
  [getFiltered.fulfilled]: (state, action) => action.payload,
  [getByFavs.fulfilled]: (state, action) => action.payload,
})

export default propiedadesReducer
