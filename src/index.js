import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//DB all feedbacks GET to display on admin page
const feedbackReducer = (state = [], action) => {
    if (action.type === 'GET_FEEDBACK') {
        return [
            ...action.payload,
        ]
    }
    return state;
}

// default state for formReducer store feedback to POST
const defaultState = {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
    date: ""
};

//redux store defaultState to POST from form pages
const formReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === 'ADD_COMMENTS') {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        formReducer
    }),
    applyMiddleware(logger),
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
