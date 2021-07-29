import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getUsers = createAsyncThunk("GET_USERS", () => {
  return axios.get(`/api/user`).then(res => res.data)
})

const adminUserReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload
})

export default adminUserReducer