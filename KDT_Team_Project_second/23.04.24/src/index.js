import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import style from './index.module.css'
import Header_JW from './component/header_jw'
import ApplySubscribe_jw from './component/applySubscribe_jw'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <BrowserRouter>

      <div className={style.container}>
        <Header_JW />
        <ApplySubscribe_jw />
      </div>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
