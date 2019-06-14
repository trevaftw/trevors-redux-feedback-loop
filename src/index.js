import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//use redux because we're creating a store
import { applyMiddleware, createStore, combineReducers } from 'redux';
//middleware so we can use logger
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const testReducer = (state = 'onready', action) => {
    if (action.type === 'TEST_DISPATCH') {
        return 'button was clicked'
    }
    return state
}

const feedbackReducer = (state = {}, action) =>{
    if(action.type === 'UPDATE_STORE'){
        return {...state,...action.payload}
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        testReducer, feedbackReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
