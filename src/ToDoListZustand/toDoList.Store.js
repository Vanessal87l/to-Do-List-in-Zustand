import { create } from "zustand";
const UseToDoListStore = create((set) => ({
  toDoList: [],
  addToDo: (text) =>
    set((state) => ({
      toDoList: [...state.toDoList, { id: Date.now(), text, completed: false }],
    })),

  removeToDo: (id) =>
    set((state) => ({
      toDoList: state.toDoList.filter((toDo) => toDo.id !== id),
    })),
  toggleToDo: (id) =>
    set((state) => ({
      toDoList: state.toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      ),
    })),
  editToDo: (id, newText) =>
    set((state) => ({
      toDoList: state.toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, text: newText } : toDo
      ),
    })),
}));
export default UseToDoListStore;
