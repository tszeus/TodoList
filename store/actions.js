import {SET_INPUT_TODO, ADD_TODO, DEL_TODO} from './contants'

export const setInputTodo = payload => ({
    type : SET_INPUT_TODO,
    payload
})

export const addTodo = payload => ({
    type : ADD_TODO,
    payload
})

export const delTodo = payload => ({
    type : DEL_TODO,
    payload
})

