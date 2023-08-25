export default function SingleTodo(props) {
  const { title } = props.item;
  return (
    <li>
      <span>{title}</span> <button onClick={props.onDelete}>delete</button>
    </li>
  );
}
