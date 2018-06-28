import React from 'react'
import {createStore, combineReducers, compose} from 'redux'

let initialState = {
    email: '',
    id: null
};

let initialStateProfile = {
    id: null
};


function getLogin (state = initialState, action) {
    return Object.assign({}, state, {email: action.email,id: action.id } )
}

function getProfile (state = initialStateProfile, action) {
    return Object.assign({}, state, {id: action.id})
}


const reducers = combineReducers({
    getLogin
});


export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);