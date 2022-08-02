//npm install --save redux
//npm install --save react-redux
// npm install --save redux-devtools-extension or npm i redux-devtools-extension
// npm install @reduxjs/toolkit
import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from '../cart/cartSlice';
import { cartTotalSlice } from '../totalCart/cartTotalSlice';
import { productsSlice } from "../products/productSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        listProduct: productsSlice.reducer,
        listCart: cartSlice.reducer,
        cartTotal: cartTotalSlice.reducer
    },
    // bug nêm thêm cái này
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;  

