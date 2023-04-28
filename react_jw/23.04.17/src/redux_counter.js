import {useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  function handleIncrement() {
      dispatch({ type: 'INCREMENT' });
    }
  
    function handleDecrement() {
      dispatch({ type: 'DECREMENT' });
    }
  
    return (
      <div>
        <h1>{state.count}</h1>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    );
  }
  export default Counter;