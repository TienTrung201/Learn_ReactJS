// npm install reselect
import { createSelector } from "reselect"
export const selectorTodoList=(state) => state.todoList
export const SearchTextSelector=(state)=>state.filters.search
export const statusTodo=(state)=>state.filters.status
export const todoRemainingSelector=createSelector(
    selectorTodoList,SearchTextSelector,statusTodo,
    (todoList,searchText,status)=>{
        if(status=="All")
            return todoList.filter(todo=>{
                return todo.name.includes(searchText);
            })
        if(status=="Completed"){
            return todoList.filter(todo=>{
                return todo.completed==true;
            })
        }else{
            return todoList.filter(todo=>{
                return todo.completed==false;
            })
        }
    }
)
// npm install reselect