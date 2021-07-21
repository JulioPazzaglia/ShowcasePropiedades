import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getCasa = createAsyncThunk("GET_CASA", (id) => {
  return axios.get(`/api/propiedades/${id}`).then(res => res.data)
})

const casaReducer = createReducer([], {
  [getCasa.fulfilled]: (state, action) => action.payload
})

export default casaReducer
