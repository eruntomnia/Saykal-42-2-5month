import {types} from "../types";


const initialTaskState = [];

export default function (state = initialTaskState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return [...state, action.payload]
        case types.TOGGLE_TASK:
            return state.map((task) =>
                task.id === action.payload ? {...task , completed: !task.completed}:task
            )
        case types.FROM_INPUT:
            return state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, text: action.payload.text, category: action.payload.category }
                    : task
            );

        case types.DELETE_TASK:
            return state.filter((task) => task.id !== action.payload.id);
        default: return state
    }
}

const initialCategoriesState = ['Work', 'Personal', 'Others']

export const categoriesReducer = (state= initialCategoriesState, action) => {
    return state
}

