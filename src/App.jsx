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
    <div className="flex flex-col items-center  justify-center h-screen w-full">
      <div className=" border-8  border-[#1B3C53] gap-2 w-[500px] rounded-2xl h-[700px]  flex flex-col items-center justify-start pt-10">


        <p className="font-semibold text-2xl text-[#234C6A]">My To List in Zustand</p>
        <form className="flex gap-3 mb-6 w-full justify-center  " onSubmit={handleAddToDo}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="vazifa yozin.." className="w-[250px]  h-[50px] mt-[50px] gap-8 outline-[#004687] pl-4" />
          <button type="submit" className="w-24 text-white   h-[52px] text-xl text-mono  border-2 rounded-md bg-[#003153] mt-12">Add </button>
        </form>
        <ul className="flex gap-4 flex-col">
          {toDoList.map((toDo) => (
            <li
              key={toDo.id} className="flex  items-center w-[360px] h-[100px] py-6 px-3 justify-between border-2 border-[#004687] rounded">
              {editId === toDo.id ? (
                <form onSubmit={handleEditToDo} className="">
                  <input type="text" value={editText}
                    onChange={(e) => setEditText(e.target.value)} className=" px-2  border border-[#004687] rounded outline-none flex-1"
                  />
                  <button type="submit" className="bg-[#008080] ml-2 text-white px-4 rounded">
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <span onClick={() => toggleToDo(toDo.id)} className=
                    {`border border-[#004687] rounded px-4 ${toDo.completed ? "line-through text-gray-800 mt-10 " : ""}`}>{toDo.text}</span>
                  <div className="flex gap-4 flex-col py-4 items-end mr-3 w-[250px] h-[100px]">

                    <button className="  ml-4 text-white bg-[#5F9EA0] w-[90px] font-mono rounded-md" onClick={() => {
                      setEditId(toDo.id);
                      setEditText(toDo.text);
                    }}>Edit</button>

                    <button onClick={() => removeToDo(toDo.id)} className="mx-4 px-2 border-2 font-mono rounded-md text-white bg-[#9e1b32] w-[90px]">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App
