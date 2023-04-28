import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import goodsReducer from './modules/goodsCounter';
import stockReducer from './modules/stockCounter';
// import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import { configureStore } from '@reduxjs/toolkit' 

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    goodsReducer,
    stockReducer
  }
})
console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
// store를 생성하는 이유
// 상태 관리: 애플리케이션의 상태를 저장하고, 
// 필요한 곳에서 상태를 가져와 사용할 수 있도록 합니다.

// 상태 변경: 액션을 디스패치하여 상태를 변경하고, 
// 이를 애플리케이션 전체에 전파할 수 있도록 합니다.
//<Provider> 컴포넌트는 react-redux 라이브러리에서 제공하는 컴포넌트로, 
//생성된 저장소를 애플리케이션의 모든 컴포넌트에 전달해줍니다
