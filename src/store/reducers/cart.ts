import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const lastItem = state.items[state.items.length - 1]
      const newItem = {
        ...action.payload,
        cartId: lastItem ? lastItem.cartId! + 1 : 1
      }

      state.items.push(newItem)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
