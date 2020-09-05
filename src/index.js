import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'


const myStore = createStore(rootReducer)
ReactDOM.render(
  <Provider store= {myStore}>
    <App /> 
   </Provider> , 
  document.getElementById('root')
);
