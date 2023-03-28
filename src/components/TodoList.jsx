/*eslint-disable */
import TodoItem from './TodoItem';

const TodoList = ({ todoProps, handleChange, deleteTodo }) => (
  <ul>
    {todoProps.map((element) => (
      <TodoItem key={element.id} item={element} handleChange={handleChange} deleteTodo={deleteTodo} />
    ))}
  </ul>
);
export default TodoList;
