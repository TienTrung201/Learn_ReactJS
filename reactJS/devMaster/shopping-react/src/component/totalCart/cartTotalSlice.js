import { createSlice } from "@reduxjs/toolkit"
import { cartSlice } from "../cart/cartSlice"
const initialCart = cartSlice.getInitialState().reduce((total, yourCart) => {
    return total + yourCart
}, 0)
export const cartTotalSlice = createSlice(
    {
        name: 'cartTotalSlice',
        initialState: {
            total: `${initialCart}`
        },
        reducers: {

            updateTotal: (state, action) => {
                const total = action.payload.reduce((total, yourCart) => {
                    return total + (yourCart.quantity) * yourCart.price
                }, 0)
                state.total = total
            }
        }
    }
)