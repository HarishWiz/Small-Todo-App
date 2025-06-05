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
    <>
      <section className="w-full min-h-screen flex justify-center items-center bg-gray-700 py-10">
        <div className="w-2/4 h-full bg-gray-900 rounded-md px-10 py-10">
          <h1 className="text-2xl text-green-600 font-bold text-center mt-10 mb-5">
            To-Do Tasks
          </h1>
          <form>
            <h1 className="text-white font-bold text-lg mb-5">
              Total Tasks : {todos.length}
            </h1>
            <div className="flex space-x-4 justify-center items-center">
              <input
                type="text"
                placeholder="Enter Your ToDO"
                className=" w-full p-2 bg-gray-600 text-white rounded-sm font-semibold outline-none "
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className={` py-2 rounded-md text-white font-semibold ${
                  editId
                    ? "bg-yellow-500 hover:bg-yellow-600 px-3"
                    : "bg-blue-500 hover:bg-blue-600 px-6"
                }`}
                onClick={handleAdd}
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </form>
          {todos.length === 0 ? (
            <p className="text-lg font-semibold text-center text-white py-5">
              Your Tasks are Empty, Add task
            </p>
          ) : (
            <ul className="mt-5 w-full pb-20 ">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`text-white flex justify-between items-center font-semibold p-2 border-white border mb-3 ${
                    todo.completed ? "line-through opacity-70" : ""
                  }`}
                >
                  <span>{todo.text}</span>
                  <span className="space-x-3">
                    <button
                      className={`px-4 py-2 rounded-md hover: ${
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
                      className="px-4 py-2 rounded-md hover:bg-yellow-600 bg-yellow-500 "
                      onClick={() => handleEdit(todo)}
                      title="Edit"
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="px-4 py-2 rounded-md hover:bg-red-600 bg-red-500 "
                      onClick={() => handleDelete(todo.id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default ToDo;
