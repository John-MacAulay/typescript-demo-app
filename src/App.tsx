import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { toDoItem} from './model';

const App: React.FC = () => {

  const [toDo, setToDoItem] = useState<string>("");
  const [toDoItemList, setToDoItemList] = useState<toDoItem[]>([]);

  const handleAddItemOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // this bit stops the default refresh on submitting

    if (toDo) {
      setToDoItemList([...toDoItemList, { id: Date.now(), toDoText: toDo , isDone: false }]);

      setToDoItem("");
    }
  }

  console.log(toDoItemList);

  return (
    <div className="App">
      <span className="heading"> This is the Header</span>
      <InputField toDo={toDo} setToDoItem={setToDoItem} handleAdd={handleAddItemOnSubmit} />
    </div>
  );
}

export default App;
