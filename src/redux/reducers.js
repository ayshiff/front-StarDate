import React from 'react'
import {createStore, combineReducers, compose} from 'redux'

let initialState = {
    email: '',
    userId: ''
};

let initialStateCard = {
    name: '',
    age:'',
    country: ''
};

function getLogin (state = initialState, action) {
    return Object.assign({}, state, {email: action.email} )
}

function getCardAction(state= initialStateCard, action, indexCard) {
    return Object.assign({}, state , {name: action.name , age: action.age ,country: action.country, indexCard: action.indexCard } )
}

const reducers = combineReducers({
    getLogin,
    getCardAction
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);