import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './component/App'
 

import {createStore} from 'redux';
import{Provider} from 'react-redux';
import rootReducer from './reducers';

import FavouriteRecipeList from './component/FavouriteRecipeList';

const store= createStore(rootReducer);
//show current store after every update/.....
store.subscribe(()=>console.log('store',store.getState()))


//routing.......browser router is the  primary component

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/favourites' component={FavouriteRecipeList}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));