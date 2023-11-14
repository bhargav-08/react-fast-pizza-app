import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseItemQunatity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      item.quantity++
      item.totalPrice = item.unitPrice * item.quantity
    },
    decreaseItemQunatity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      item.quantity--
      item.totalPrice = item.unitPrice * item.quantity
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export default cartSlice.reducer

export const {
  addItem,
  clearCart,
  decreaseItemQunatity,
  deleteItem,
  increaseItemQunatity,
} = cartSlice.actions

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0)

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0)

export const getCart = (state) => state.cart.cart

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity
