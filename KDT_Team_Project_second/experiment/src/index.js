import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";
import style from './css/jw_app.module.css';
import ScrollTop from './additional_features/jw_scrollTop';
import rootReducer from "./data/jw_combineReducers";
import Appjw from "./component/jw_App";
import Footerjw from './component/jw_footer';
import TopBtnjw from './component/jw_topBtn';
import HeaderJW from './component/jw_header'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools,
});

root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <div className={style.container}>
  <Provider store={store}>
  <BrowserRouter>
    <ScrollTop />
    <HeaderJW />
    <TopBtnjw />
    <Appjw />
    <Footerjw />
  </BrowserRouter>
  </Provider>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
