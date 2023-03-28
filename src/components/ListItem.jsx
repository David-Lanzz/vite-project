/*eslint-disable */
import { useState } from 'react';
import InputField from './Input';
import TodoList from './TodoList';

const ListItems = () => {
  const [todos, changeTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleChange = (id) => {
    changeTodos((todos) => {
      todos.map((element) => {
        if (element.id === id) {
          element.completed = !element.completed;
        }
      });
      return todos;
    });
    return todos;
  };
  const deleteTodo = (id) => {
    changeTodos((todos) => {
      const filter = todos.filter((element) => element.id !== id);
      todos = filter;
      return todos;
    });
  };
  const changeInput = (value) => {
    const newTodo = {
      id: new Date(),
      title: value,
      completed: false,
    };
    changeTodos([...todos, newTodo]);
  };
  return (

    <div>
      <InputField changeInput={changeInput} />
      <TodoList todoProps={todos} handleChange={handleChange} deleteTodo={deleteTodo} />
    </div>
  );
};

export default ListItems;
