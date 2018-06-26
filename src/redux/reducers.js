import React from 'react'
import {createStore, combineReducers, compose} from 'redux'

let initialState = {
    email: ''
};


function getLogin (state = initialState, action) {
    return Object.assign({}, state, {email: action.email} )
}


const reducers = combineReducers({
    getLogin,
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);