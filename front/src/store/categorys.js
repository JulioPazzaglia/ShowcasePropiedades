import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategorys = createAsyncThunk("GET_CATEGORYS", () => {
  return axios.get("/api/category").then(res => res.data)
})

const categoryReducer = createReducer([], {
  [getCategorys.fulfilled]: (state, action) => action.payload
})

export default categoryReducer