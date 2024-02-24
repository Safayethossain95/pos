import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import itemReducer from '../features/counter/itemSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        itemnumber: itemReducer // Use 'counter' as the key, and counterReducer as the value
      }
})