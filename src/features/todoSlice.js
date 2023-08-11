import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //adds todo
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        //removes a todo
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        //clears all todos
        clearTodo: () => {
            return { items: [] }
        }
    }
})



export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer