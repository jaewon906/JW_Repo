import React from 'react'
import {useState} from 'react';
// state 끌어올리기(lifting-state-up)
function AddCalculator() {
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    // useState hook의 초기값을 생략하면, 해당 state의 초기값은 undefined가 된다.
    // 이 때 컴포넌트가 랜더링될 때 해당 state의 값이 undefined에서 첫번째 전달인자로 지정한 값으로 설정
    const handleNum1 = (e)=>{
      const newNum1 = parseInt(e.target.value);
      setNum1(newNum1);
    }
    const handleNum2 = (e)=>{
      const newNum2 = parseInt(e.target.value);
      setNum2(newNum2);
    }
    // 두개의 이벤트 핸들러 함수 handleNum1, handleNum2 정의
    // 사용자가 두 개의 입력 필드에 입력할 때 마다 호출.
    // 이 함수들은 입력값의 문자열을 parseInt를 사용하여 정수로 변환하고,
    // 해당 값에 맞는 상태 업데이트 함수를 사용하여
    // state값을 업데이트한다.
    
  return (
   <div>
     <h2>더하기</h2>
     <input type="number" name="num1" value={num1} onChange={handleNum1}/>
     <input type="number" name="num2" value={num2} onChange={handleNum2}/>
     결과 : {num1 + num2}
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
function App(){
  return(
    <div>
      <h1>계산기</h1>
      <AddCalculator/>
    </div>
  )
}
export default App;
// state 만드는법 : let posts = "어쩌구" 이렇게 변수에 데이터를 저장했었는데
// 리액트에선 변수 말고 state를 만들어서 데이터를 저장해 둘 수 있다.