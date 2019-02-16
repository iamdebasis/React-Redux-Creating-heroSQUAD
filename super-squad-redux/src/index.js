import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore } from 'redux';
import {Provider} from 'react-redux';
//import reducer 
import rootReducer from './reducers' //as we have expoeted our reducer we can assign any variable here..to import it
import {addCharacterById} from './actions'

const store=createStore(rootReducer)
console.log(store.getState())
store.subscribe(()=>console.log('store',store.getState()))
store.dispatch(addCharacterById(2))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 
