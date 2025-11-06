import { React, useState } from 'react';
import UseToDoListStore from './ToDoListZustand/toDoList.Store.js';
function App() {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const { toDoList, addToDo, removeToDo, toggleToDo, editToDo } = UseToDoListStore();

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (text.trim() === "")
      return;
    addToDo(text)
    setText("");
  };
  const handleEditToDo = (e) => {
    e.preventDefault();
    if (editText.trim() === "")
      return;
    editToDo(editId, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="flex  mx-auto container w-full h-100vh items-center justify-center">
      <p>My To List in Zustand</p>
      <form onSubmit={handleAddToDo}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="vazifa yoz noviy.." className="mx-6 py-6" />
        <button type="submit" className="w-20 h-10">Add </button>
      </form>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id} className={`flex  items-center mb-4 p-4 justify-between border rounded ${toDo.completed ? "line-through text-gray-400" : ""
            }`}>
            {editId === toDo.id ? (
              <form onSubmit={handleEditToDo} className="flex gap-2 flex-1">
                <input type="text" value={editText}
                  onChange={(e) => setEditText(e.target.value)} className="border p-1 rounded flex-1"
                />
                <button type="submit" className="bg-green-500 text-white px-2 rounded">
                  Save
                </button>
              </form>
            ) : (
              <>
                <span onClick={() => toggleToDo(toDo.id)}>{toDo.text}</span>
                <div className="flex gap-4">

                  <button onClick={() => {
                    setEditId(toDo.id);
                    setEditText(toDo.text);
                  }}>Edit</button>

                  <button onClick={() => removeToDo(toDo.id)} className="mx-4">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App
