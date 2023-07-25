import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  cartId?: number
}

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
      const lastItem = state.items[state.items.length -1]
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
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
