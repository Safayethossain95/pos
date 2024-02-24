import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  item: [
    { name: "Pure White Tee", count: 1 ,price:90.6},
    { name: "Blue Jeans", count: 1,price:22.2 },
    // Add more items as needed
  ]
}


export const itemSlice = createSlice({
    name: 'itemnumber',
    initialState,
    reducers: {
      incrementitem: (state,action) => {
        
        state.item[action.payload].count++

      },
      decrementitem: (state,action) => {
        state.item[action.payload].count--
      },
      addItem: (state, action) => {        
        state.item.push(action.payload);
      },
      
    },
  })

  export const { incrementitem, decrementitem } = itemSlice.actions
  export default itemSlice.reducer