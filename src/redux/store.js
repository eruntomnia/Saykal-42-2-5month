import { createStore } from 'redux';

const initialState = {
    counter: 0,
};


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: Math.max(state.counter - 1, 0) };
        case 'INCREMENT_BY_TEN':
            return { counter: state.counter + 10 };
        case 'DECREMENT_BY_TEN':
            return { counter: Math.max(state.counter - 10, 0) };
        case 'RESET':
            return { counter: 0 }; // Сбросить в 0
        default:
            return state;
    }
};


const store = createStore(counterReducer);

export default store;
