/*eslint-disable */
const TodoItem = ({ item, handleChange, deleteTodo }) => (
  <li>
    <input type="checkbox" name="" id="" onChange={() => handleChange(item.id)} iscompleted={item.isCompleted} />
    <button onClick={() => deleteTodo(item.id)}>Delete</button>
    {item.title}
  </li>
);
export default TodoItem;
