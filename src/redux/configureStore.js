import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import nguoiDungSlice from './nguoiDungSlice'
import congViecSlice from './congViecSlice'

export const store = configureStore({
  
  reducer: {
    authSlice,
    nguoiDungSlice,
    congViecSlice
  },
})