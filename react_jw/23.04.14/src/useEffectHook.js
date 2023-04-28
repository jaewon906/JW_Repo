import {useState} from 'react'
import {useEffect} from 'react'
import React from 'react'
function App(){

const [count, setCount] = useState(0);
const [bool, setBool] = useState(false);
const handleCountUp = () => {
    setCount((value) =>  value + 1);
    setBool(true)
 
}

useEffect(()=>{
    // state가 변경되서 렌더링 될 때 실행하는 부분
     return()=>{
        // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리는데 이 과정에서 지우기 전에 실행되는 부분
        // clean-up이라고
     }
    
},[]);

  return(
    <React.Fragment>
        {count}
        <button onClick={handleCountUp}>증가한다.</button>
        
    </React.Fragment>
  );
};

export default App;