
import { createSlice } from "@reduxjs/toolkit"
import { creatStoreage } from "./cartLocalStorage"
export const cartLocal = creatStoreage("yourCart")
let inittalCard = []
// localStorage.clear();
// cartLocal.pushValue({
//     name:"stt1",
//     price:"2",
//     quantity:"1",
// })
const initialState = [

]
inittalCard = initialState
let checkStoreage = true
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: inittalCard,
    reducers: {
        buyProduct: (state, action) => {
            const check = state.some((cart) => {
                return cart.name == action.payload.name
            })
            if (check) {
                state.forEach(element => {
                    if (element.name == action.payload.name) {
                        element.quantity = parseInt(action.payload.quantity) + parseInt(element.quantity)
                    }
                });
            } else {
                state.push(action.payload)
            }


        },
        deleteProduct: (state, action) => {
            state.splice(action.payload, 1)
        },
        changeQuantityName: (state, action)=>{
            state.forEach(element => {
                if (element.name == action.payload.name) {
                    element.quantity = parseInt(action.payload.value)
                }
            });

        }
    }
})



