//cài đặt redux:
//npm install --save redux
//npm install --save react-redux
// npm install --save redux-devtools-extension or npm i redux-devtools-extension
// npm install @reduxjs/toolkit
// import {createStore}from 'redux'
import rootReducer from './reducer';//thông thường
import {configureStore} from '@reduxjs/toolkit'
// cách thông thường
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composedEnhancers=composeWithDevTools()
// const store = createStore(rootReducer,composedEnhancers);//rootReducer,initValue,enhancers nhận 3 

import {todoListSlice} from "../components/TodoList/todoListSlice"
import {filtersSlice} from "../components/Filters/filtersSlice";
// import {configureStore} from '@redux/toolkit/configureStore';

const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store;   
