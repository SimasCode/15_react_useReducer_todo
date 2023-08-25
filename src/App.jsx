import Counter from './components/Counter';
import Todo from './components/todo/Todo';
import './style/App.css';
import './style/reset.css';

export default function App() {
  return (
    <div className='container'>
      <h1>Use reducer</h1>
      {false && <Counter />}
      <Todo />
    </div>
  );
}
