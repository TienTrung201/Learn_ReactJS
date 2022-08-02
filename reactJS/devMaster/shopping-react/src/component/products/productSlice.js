import { createSlice } from "@reduxjs/toolkit"
export const productsSlice = createSlice({
    name: "productsSlice",
    initialState:[
            {
                productId: 'P001',
                productName: 'aplusautomation',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
                price: 12,
                image: "aplusautomation.jpg",
                quantity: 10
            },
            {
                productId: 'P002',
                productName: 'aplus media',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
                price: 13,
                image: "aplus-media.jpg",
                quantity: 0
            },
            {
                productId: 'P003',
                productName: 'robo fig combo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
                price: 14,
                image: "robo_fig_combo.jpg",
                quantity: 15
            },
            {
                productId: 'P004',
                productName: 'target leap frog',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
                price: 9,
                image: "target-leap-frog.jpg",
                quantity: 20
            }
        ],
       

    reducers:{
        
    }
})
