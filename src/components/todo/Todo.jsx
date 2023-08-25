import { useReducer } from 'react';
import Addtodo from './Addtodo';
import SingleTodo from './SingleTodo';

// sukirti useReducer() fn
// atvaizduoti sarasa is state
// atvaizdtuoti todo kurie yra baigti perbrauktus ir pilkus (prideti klase)
// padaryti kad eitu prideti todo
// sukuriant nauja todo prideti data i date
// padaryti kad eitu istrinti todo
// padaryti kad paspaudus ant title todo taptu baigtas (done: false|true)
// suskaidyti i atskirus komponentus

const initTodos = [
  { id: 1, title: 'Buy Eggs', done: false, date: '' },
  { id: 2, title: 'Go to Shopping', done: true, date: '' },
  { id: 3, title: 'Do a 100 pushups', done: false, date: '' },
];

function toDoReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function Todo() {
  const [state, dispatch] = useReducer(toDoReducer, initTodos);
  console.log('state ===', state);

  function handleAddTodo(newTodoTitle) {
    const newId = Math.random().toString().slice(4, 6);
    const newTodoObject = {
      id: newId,
      title: newTodoTitle,
      isDone: false,
      date: '',
    };
    dispatch({ type: 'ADD_TODO', payload: newTodoObject });
  }

  function handleDeleteTodo(idToDelete) {
    console.log('idToDelete ===', idToDelete);
    dispatch({ type: 'DELETE_TODO', payload: idToDelete });
  }

  return (
    <div>
      <h2>Welcome to our Todo</h2>
      <Addtodo onAddTodo={handleAddTodo} />
      <ul>
        {state.map((todoObj) => (
          <SingleTodo
            key={todoObj.id}
            item={todoObj}
            onDelete={() => handleDeleteTodo(todoObj.id)}
          />
        ))}
      </ul>
    </div>
  );
}
