import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //edit the todo

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  //  once it is done it will be crossed out
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // delete the todo from the list
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="bg-cyan-500 px-7 py-5 rounded-md my-5">
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            className="py-2 outline outline-cyan-500 outline-offset-0 rounded-md shadow-md"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s className="text-2xl mx-2">{todo.todo}</s>
        ) : (
          <span className="text-2xl mx-2">{todo.todo}</span>
        )}
        <div className="flex justify-center items-center">
          <span
            className="mx-2 text-gray-700"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span
            className="mx-2 text-red-500"
            onClick={() => handleDelete(todo.id)}
          >
            <AiFillDelete />
          </span>
          <span
            className="mx-2 text-lime-700"
            onClick={() => handleDone(todo.id)}
          >
            <AiOutlineFileDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
