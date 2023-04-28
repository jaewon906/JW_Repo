import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import style from './index.module.css'
import rootReducer from './data/combineReducers';
import Header_JW from './component/header_jw'
import ApplySubscribe_jw from './component/applySubscribe_jw'
import reportWebVitals from './reportWebVitals';
import TopBtn from './component/topBtn'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:rootReducer
})
root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <Provider store={store}>
  <BrowserRouter>
      <div className={style.container}>
        <TopBtn />
        <Header_JW />
        <ApplySubscribe_jw />
      </div>
  </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
