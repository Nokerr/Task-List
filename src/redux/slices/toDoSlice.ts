import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToDoState {
    totdos: Todo[]
}

type Todo = {
    id: string,
    text: any,
    complited: boolean
}

const initialState: ToDoState = {
    totdos: []
}

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<{}>) => {
            state.totdos.push({
                id: new Date().toISOString(),
                text: action.payload,
                complited: false
            })
        },
        removeToDo: (state, action: PayloadAction<string>) => {
            state.totdos = state.totdos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            state.totdos.map(item => {
                if (item.id === action.payload) {
                    item.complited = !item.complited
                }
            })
        },
        addTodoToLS: (state, action: PayloadAction<[]>) => {
            state.totdos = action.payload
        }
    }

})

export default ToDoSlice.reducer

export const { addToDo, removeToDo, toggleTodo, addTodoToLS } = ToDoSlice.actions