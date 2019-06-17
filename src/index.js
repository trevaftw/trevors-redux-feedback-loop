import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//use redux because we're creating a store;middleware so we can use logger
import { applyMiddleware, createStore, combineReducers } from 'redux';
//------What does provider do?
import { Provider } from 'react-redux';
//logger to track state action changes
import { logger } from 'redux-logger';

//styling ---need to figure out still
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const feedbackReducer = (state = {}, action) =>{
    if(action.type === 'UPDATE_STORE'){
        // return [...state, action.payload]
        // i originally had above, but need to spread both and put them in one object
        //we're creating one database entry, so we can use one state to track everything
        return {...state,...action.payload}
    }else if(action.type === 'SUBMISSION_COMPLETE'){
        //this clears the state when triggered
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
