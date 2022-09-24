import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';


import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';


import Home  from './components/Home';

import 'antd/dist/antd.min.css';
import './custom.css'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null;
//composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route exact={true} path="/" element={<Home />} />

                    </Routes>
                </BrowserRouter>
            </Provider>
        );
    }
}
