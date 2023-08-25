import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Kaunas',
  });

  function goUp() {
    setCounter(counter + 1);
    // setCred({ email: 'james@bond.com', pass: cred.pass });
    setCred({ ...cred, email: 'james@bond.com' });
  }

  function goDown() {
    setCounter(counter - 1);
  }

  console.log('cred ===', cred);
  return (
    <div className='card'>
      <h2>Counter</h2>
      <p className='counter'>{counter}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
      </div>
    </div>
  );
}
