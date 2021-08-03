import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const userRegister = createAsyncThunk("userRegister", user => {
  return axios.post("/api/user/register", user).then(res => res.data)
})

export const userLogin = createAsyncThunk("userLogin", user => {
  return axios
    .post("/api/user/login", user)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    })
})

export const cookiesUser = createAction("cookiesUser", user => ({ payload: user }))

export const userLogout = createAsyncThunk("userLogout", () => {
  return axios.post("api/user/logout").then(res => {
    return res.data
  })
})

export const getSingleUser = createAsyncThunk("GET_SINGLEUSER", () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "/api/user"
  }).then(res => res.data)
})

const userReducer = createReducer(
  {},
  {
    [userLogin.rejected]: (state, action) => action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
    [getSingleUser.fulfilled]: (state, action) => [state, action.payload],
    [userLogout.fulfilled]: (state, action) => action.payload,
    [cookiesUser]: (state, action) => action.payload
  }
)

export default userReducer
