import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
    let{글제목, b} = useState("남자 코트 추천");
    let posts = "강남 우동 맛집"
  return (
   <div className="App">
        <div className="black-nav">
            <div>개발 블로그</div>
        </div>
            <div className="list">
                <h4>{글제목}</h4>
                <p>04월 03일 발행</p>
        </div>
    </div>
  

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
// state 만드는법 : let posts = "어쩌구" 이렇게 변수에 데이터를 저장했었는데
// 리액트에선 변수 말고 state를 만들어서 데이터를 저장해 둘 수 있다.