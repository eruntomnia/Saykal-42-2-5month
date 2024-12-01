import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
// import {createStore} from "redux";
// import reducer from "./redux/reducer";
//
// const store = createStore(reducer)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
);