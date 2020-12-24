import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부",
      checked: true,
    },
    {
      id: 2,
      text: "운동",
      checked: true,
    },
    {
      id: 3,
      text: "숙제",
      checked: false,
    },
  ]);

  const nextid = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextid.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextid.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !==id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
