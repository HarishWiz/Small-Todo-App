import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editId) {
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, text: input } : todo
          )
        );
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      }
      setInput("");
    }
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-start sm:items-center bg-gray-700 py-10 px-4 sm:px-6">
      <div className="w-full max-w-3xl bg-gray-900 rounded-md px-5 py-8 sm:px-10 sm:py-10">
        <h1 className="text-2xl text-green-600 font-bold text-center mb-6">
          To-Do Tasks
        </h1>

        <form onSubmit={handleAdd}>
          <h1 className="text-white font-bold text-lg mb-4">
            Total Tasks: {todos.length}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Your To-Do"
              className="flex-1 p-2 bg-gray-600 text-white rounded-sm font-semibold outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className={`py-2 rounded-md text-white font-semibold ${
                editId
                  ? "bg-yellow-500 hover:bg-yellow-600 px-4"
                  : "bg-blue-500 hover:bg-blue-600 px-6"
              }`}
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </form>

        {todos.length === 0 ? (
          <p className="text-lg font-semibold text-center text-white py-6">
            Your Tasks are Empty, Add a Task
          </p>
        ) : (
          <ul className="mt-6 space-y-3 pb-20">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 font-semibold p-3 border border-white rounded-md ${
                  todo.completed ? "line-through opacity-70" : ""
                }`}
              >
                <span className="break-words">{todo.text}</span>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    className={`px-3 py-2 rounded-md ${
                      todo.completed
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => handleCompleted(todo.id)}
                    title={
                      todo.completed
                        ? "Mark as Incomplete"
                        : "Mark as Completed"
                    }
                  >
                    {todo.completed ? <RxCross2 /> : <TiTick />}
                  </button>

                  <button
                    className="px-3 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => handleEdit(todo)}
                    title="Edit"
                  >
                    <FiEdit />
                  </button>

                  <button
                    className="px-3 py-2 rounded-md bg-red-500 hover:bg-red-600"
                    onClick={() => handleDelete(todo.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ToDo;
