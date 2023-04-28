import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Main from '../src/practice/component/Main'
import Header from '../src/practice/module/header'
import rootReducer from '../src/practice/module/counter'
import reportWebVitals from './reportWebVitals';
import style from './practice/module/counter.module.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <div className={style.div1}>
      <Header />
      <div className={style.div2}> 
        <Main tab="home"/>
      </div>
    </div>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
