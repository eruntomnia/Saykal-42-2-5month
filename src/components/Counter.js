import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    // Извлечение текущего значения счетчика из состояния Redux
    const counter = useSelector((state) => state.counter);

    // Создание dispatch для отправки действий
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {counter}</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })} disabled={counter === 0}>
                    -1
                </button>
                <button onClick={() => dispatch({ type: 'INCREMENT_BY_TEN' })}>+10</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_BY_TEN' })} disabled={counter < 10}>
                    -10
                </button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Сброс</button>
            </div>
        </div>
    );
};

export default Counter;
