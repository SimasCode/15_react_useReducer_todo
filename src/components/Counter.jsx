import { useReducer, useState } from 'react';

const initCounterValue = { countNum: 0, countTitle: 'Push Ups' };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  //   if (action.type === 'UP') {
  //     return { countNum: state.countNum + 1 };
  //   } else if (action.type === 'DOWN') {
  //     return { countNum: state.countNum - 1 };
  //   } else if (action.type === 'RESET') {
  //     return { countNum: 0 };
  //   }
  //   return state;

  switch (action.type) {
    case 'UP': {
      return {
        // countTitle: state.countTitle,
        ...state,
        countNum: state.countNum + 1,
      };
    }

    case 'DOWN': {
      return { ...state, countNum: state.countNum - 1 };
    }

    case 'RESET':
      return initCounterValue;

    case 'UPBY': {
      return { ...state, countNum: state.countNum + action.payload };
    }

    case 'EDIT_TITLE':
      return { ...state, countTitle: action.payload };
    default:
      console.warn('tipas nerastas');
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initCounterValue);
  //   const [state, setState] = useState({ countNum: 0 });
  // const [cred, setCred] = useState({
  //   email: '',
  //   pass: 'secret',
  //   town: 'Kaunas',
  // });
  //   console.log('state ===', state);

  function goUp() {
    dispatch({ type: 'UP' });
    // setState({ countNum: state.countNum + 1 });
    // setCred({ email: 'james@bond.com', pass: cred.pass });
    // setCred({ ...cred, email: 'james@bond.com' });
  }

  function goDown() {
    dispatch({ type: 'DOWN' });
    // setState({ countNum: state.countNum - 1 });
  }
  function reset() {
    dispatch({ type: 'RESET' });
  }

  function upBy(howMuch) {
    console.log('howMuch ===', howMuch);
    dispatch({ type: 'UPBY', payload: howMuch });
  }

  function titleChange(event) {
    dispatch({ type: 'EDIT_TITLE', payload: event.target.value });
  }
  //   console.log('cred ===', cred);
  return (
    <div className='card'>
      <input
        value={state.countTitle}
        onChange={titleChange}
        type='text'
        placeholder='Change title'
      />
      <h2>{state.countTitle}</h2>
      <p className='counter'>{state.countNum}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => upBy(10)}>Up by 10</button>
      </div>
    </div>
  );
}
