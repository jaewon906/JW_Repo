import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './data/combineReducers';
import reportWebVitals from './reportWebVitals';
import App from './component/App';
import TopBtnJW from './component/topBtn_JW';
import HeaderJW from './component/header_jw';
import ApplySubscribeJW from './component/applySubscribe_jw';
import style from './css/app.module.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: rootReducer
})
root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <div className={style.container}>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={
        <>
          <TopBtnJW />
          <HeaderJW />
          <ApplySubscribeJW />
        </>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
