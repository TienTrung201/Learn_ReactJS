import { act } from "react-dom/test-utils"

// const initState = {
//     search: "",
//     status: "All",
//     property: []
// }
// const filterReducer = (state = initState, action) => {
//     // npm install redux-devtools-extensions
//     switch (action.type) {
//         case "filters/replaceSearch":
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case "filters/statusFiltersChange":
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         default:

//             return state
//     }
// }
// export default filterReducer
import { createSlice } from "@reduxjs/toolkit"
export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        property: []
    },
    reducers:{
        replaceSearch:(state,action)=>{
            // nhìn viết là mutation // hưng lại là inmutations  không cần setlai state
            state.search=action.payload
        },//=>{type: filters/replaceSearch}
        statusFiltersChange:(state,action)=>{
            state.status=action.payload
        }
    }
})
