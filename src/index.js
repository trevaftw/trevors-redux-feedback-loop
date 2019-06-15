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


const feedbackReducer = (state = {}, action) =>{
    if(action.type === 'UPDATE_STORE'){
        // return [...state, action.payload]
        // i originally had above, but need to spread both and put them in one object
        return {...state,...action.payload}
    }else if(action.type === 'SUBMISSION_COMPLETE'){
        console.log('state', state)
        return {};
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
