import { createSlice } from "@reduxjs/toolkit"
export function creatStoreage(key){
    const store=JSON.parse(localStorage.getItem(key))??[]
    const save=()=>{
        localStorage.setItem(key,JSON.stringify(store));
    }
    const storage ={
        length(){
            return store.length
        },
        get(){
            return store;
        },
        pushValue(value){
            store.push(value)
            save();
        },
        removeValue(key){
            // delete store[key];
            store.splice(key, 1);
            save();
        },
        replaceQuantity(value,key){
            const sumQuantity=parseInt(value.quantity)+parseInt(this.get()[key].quantity)
            let storageCart={
                ...value,
                quantity:sumQuantity
            }
            store[key].quantity=3// không thể thay đổi giá trị của object
            store[key]=storageCart
            save();
        }
        
    }
    return storage;
}
