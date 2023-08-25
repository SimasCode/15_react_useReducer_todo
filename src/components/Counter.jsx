import { useState } from 'react';

export default function Counter() {
  const [state, setState] = useState({ value: 0 });
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Kaunas',
  });
  console.log('state ===', state);

  function goUp() {
    setState({ value: state.value + 1 });
    // setCred({ email: 'james@bond.com', pass: cred.pass });
    // setCred({ ...cred, email: 'james@bond.com' });
  }

  function goDown() {
    setState({ value: state.value - 1 });
  }

  console.log('cred ===', cred);
  return (
    <div className='card'>
      <h2>Counter</h2>
      <p className='counter'>{state.value}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
      </div>
    </div>
  );
}
