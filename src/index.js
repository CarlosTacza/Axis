import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Routes
import AppRoutes from './Routes.js';
import { BrowserRouter as Router } from 'react-router-dom';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//estado
const state = { cantidad: 0};

//funcion reducer o reductora
const reducer = (state, action) => {
    var nuevoEstado = Object.assign({}, state);
    if( action.type === "AUM"){
        nuevoEstado.cantidad = state.cantidad + 1;
        return nuevoEstado;
    }
    else if( action.type === "DIS"){
        nuevoEstado.cantidad = state.cantidad - 1;
        return nuevoEstado;
    }
    return state;
}

//crear store
const store = createStore(reducer, state);

//render
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
