import React, { useState } from 'react';
import InputField  from './Components/InputField';


import './App.css';

const App: React.FC = () => {
  
const [toDoItem, setToDoItem] = useState<string>("")
const [toDoItemList, setToDoItemList] = useState([])

  return (
    <div className="App">
    <span className= "heading"> This is the Header</span>
      <InputField toDoItem={toDoItem} setToDoItem = {setToDoItem}/>
    </div>
  );
}

export default App;
