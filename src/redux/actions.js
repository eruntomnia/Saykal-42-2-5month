import {types} from "./types";


export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(text) {
    return {
        type: types.WITH_PARAMS,
        payload: text
    }
}

export const addTask = (task) => ({
    type: types.ADD_TASK,
    payload: task
})

export const toggleTask = (taskId) => ({
    type: types.TOGGLE_TASK,
    payload: taskId
})

export const editTask = (id, text, category) => ({
    type: types.FROM_INPUT,
    payload: { id, text, category },
});

export const deleteTask = (id) => ({
    type: types.DELETE_TASK,
    payload: { id },
});