import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  // state to capture the todo and set it
  const [todo, setTodo] = useState<string>("");
  // all the todo model type
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: todos.length, todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="flex flex-col items-center bg-gray-200 h-[100vh] py-10">
      <h1 className="text-4xl font-bold">Simple ToDo App with TypeScript</h1>
      <div className="py-10">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
