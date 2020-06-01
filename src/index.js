import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
<<<<<<< HEAD
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
||||||| merged common ancestors
import rootReducer from './reducers/index';
import { createStore } from 'redux';
=======
import rootReducer from './redux/reducers/index';
import { createStore } from 'redux';
>>>>>>> 2f8d21c18aae122bce9a6d555de058339dd4191a
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
  applyMiddleware(middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
