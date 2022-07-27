import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; //npm i react-toastify | alerts
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, {persistor} from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './pages/Header';
import Rotas from './routes';

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter history={history}>
                <Header/>
                <Rotas/>
                <GlobalStyles/>
                <ToastContainer autoClose={3000} className="toast-container"/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
  );
}


//redux - estado global --parece triggers
    //exemplo carrinho de compras. Está presente em todas as paginas
        //com os valores persistidos
