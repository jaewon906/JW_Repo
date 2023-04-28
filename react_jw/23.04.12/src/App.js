
import './App.css';
import {useState} from 'react';
import {React} from 'react';
function App() {
  const [amount, setAmount] = useState('');
  const [flip, setFlip] = useState(false);

  const onChange = (e) => {
      setAmount(e.target.value);
  }

  const onFlip = () => {
      setAmount("");
      setFlip(current => !current);
  }
  return (
      <>
          <h1>Super Converter</h1>
          <label htmlFor="amount">amounts</label> {/*label은 input 옆에 써주는 글씨*/}
          <input 
             id="amount" 
             placeholder="amounts"
             type="number" 
             onChange={onChange} 
             value={flip ? amount * 60 : amount}
             disabled={flip===true} />
          {/*label for= "input`s ID"는 ID에 해당하는 input과 연결시키기 위한 것이다.
      for 는 자바스크립트의 문법과 겹쳐서 React에서는 에러가 날 수 있다. 따라서
      React에서는 htmlFor로 변경해줘야 한다.*/}
          <h2>{amount}{flip ? "시간":"분"}을 {!flip ? Math.round(amount / 60)+"시간":amount * 60+"분"}으로 바꾸기</h2>
          <label htmlFor="hours">Hours </label>
          <input 
             id="hours" 
             placeholder="Hours" 
             type="number" 
             onChange={onChange} 
             value={!flip ? Math.round(amount / 60) :amount}
             disabled={flip===false} /><br /><br />
          <button id="flip" onClick={onFlip}>flip</button>
      </>
  )
}


export default App;
// state 만드는법 : let posts = "어쩌구" 이렇게 변수에 데이터를 저장했었는데
// 리액트에선 변수 말고 state를 만들어서 데이터를 저장해 둘 수 있다.