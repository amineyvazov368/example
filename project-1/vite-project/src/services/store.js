import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { modelAPI } from "../services/ProductQuerySlice"

export const store = configureStore({
  reducer: {
 
    [modelAPI.reducerPath]: modelAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modelAPI.middleware),
})


setupListeners(store.dispatch)

export default store