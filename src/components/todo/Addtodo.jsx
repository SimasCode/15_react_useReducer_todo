import { useState } from 'react';

export default function AddTodo(props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function inputTodo(event) {
    console.log('event.target.value  ===', event.target.value);
    setNewTodoTitle(event.target.value);
  }

  function handleNewTodoInput() {
    if (newTodoTitle === '') return;
    props.onAddTodo(newTodoTitle);
    setNewTodoTitle('');
  }
  return (
    <fieldset>
      <legend>Add todo</legend>
      <input
        onChange={inputTodo}
        value={newTodoTitle}
        type='text'
        placeholder='Add todo'
      />
      <button onClick={handleNewTodoInput}>Add</button>
    </fieldset>
  );
}
