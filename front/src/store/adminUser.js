import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getUsers = createAsyncThunk("GET_USERS", () => {
  return axios.get(`/api/user`).then(res => res.data)
})

export const putAdmin = createAsyncThunk("PUT_ADMIN", (userId)=>{
  return axios.put(`/api/admin/edit/${userId}`).then(res => res.data)
})

export const delAdmin = createAsyncThunk("DEL_ADMIN", (userId)=>{
  return axios.delete(`/api/admin/${userId}`).then(res => res.data)
})


const adminUserReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
  [putAdmin.fulfilled]: (state, action) => action.payload,
  [delAdmin.fulfilled]: (state,action) => action.payload
})

export default adminUserReducer