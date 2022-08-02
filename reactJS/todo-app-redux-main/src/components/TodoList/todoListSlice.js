import { act } from "react-dom/test-utils"

// const initState = [

//     { id: 1, name: 'Learn javascript', completed: false, prioriry: "Medium" },
//     { id: 2, name: 'Learn react', completed: true, prioriry: "Low" },
//     { id: 3, name: 'Learn C#', completed: false, prioriry: "High" },


// ]
// const todoListReducer = (state = initState, action) => {
//     // npm install redux-devtools-extensions
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [
//                 ...state,
//                 action.payload
//             ]
//         default:

//             return state
//     }
// }
// export default todoListReducer

import { createSlice } from "@reduxjs/toolkit"
export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: 'Learn javascript', completed: false, prioriry: "Medium" },
        { id: 2, name: 'Learn react', completed: true, prioriry: "Low" },
        { id: 3, name: 'Learn C#', completed: false, prioriry: "High" },
    ],
    reducers: {
        addTodo: (state, action) => {
            // nhìn viết là mutation // hưng lại là inmutations  không cần setlai state
            state.push(action.payload)
        },
        toggleCompleteChange:(state,action)=>{
            //không set lại được state khi dùng toolkit
            // const stateReplace= state.map(todo=>{
            //     // console.log(todo.id==action.payload?{...todo,completed: !todo.completed}:{...todo})
            //     return todo.id==action.payload?{...todo,completed: !todo.completed}:{...todo}
            // })
            // console.log(stateReplace)
            // state=stateReplace


            //set trực tiếp-----------------------đối tượng đó
            const currentTodo=state.find(todo=>todo.id==action.payload)
            currentTodo.completed=!currentTodo.completed
        }
    }
})

