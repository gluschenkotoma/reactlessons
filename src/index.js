import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //импорт провайдера редакс
import './index.css';
import App from './App';

import { store } from '../src/redux/store'; //импорт хранилища store={store}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// подключение редакс
// import { Provider } from 'react-redux';
// <Provider store={store}> <App /> </Provider>
// store={store} -- глобальное хранилище, импортируестся с папки редакс
// import { store } from '../src/redux/store';
