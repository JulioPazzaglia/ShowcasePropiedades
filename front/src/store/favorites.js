import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const putFavs = createAsyncThunk("PUT_FAVS", (body) => {
  return axios.put(`/api/favorites/`, body).then(res => res.data)
})
export const deleteFavs = createAsyncThunk("DELETE_FAVS", (body) => {
  return axios.delete(`/api/favorites/${body.userId}/${body.houseId}`).then(res => res.data)
})

const favoritesReducer = createReducer([], {
  [putFavs.fulfilled]: (state, action) => action.payload,
  [deleteFavs.fulfilled]: (state,action) => action.payload,
})

export default favoritesReducer