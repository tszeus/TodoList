
import {SET_INPUT_TODO, ADD_TODO, DEL_TODO} from './contants'

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_INPUT_TODO:
            return {
                ...state,
                todoInput: action.payload
        }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter((item, index) => index !== action.payload)
            }
        default: 
            console.log('err')
    }
}

export {initState}
export default reducer