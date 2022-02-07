import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => {
        return {
            ...state,
            ...payload,
            visible: true
        }
    },
    [HIDE_ALERT]: (state) => {
        return {
            ...state,
            visible: false
        }
    },
    DEFAULT: (state) => {
        return state
    }
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT // ?? Функция ??
    return handle(state, action)
}