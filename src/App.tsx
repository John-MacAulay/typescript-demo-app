import React, { useState } from 'react';
import InputField  from './Components/InputField';


import './App.css';

const App: React.FC = () => {
  
const [toDoItem, setToDoItem] = useState<string>("")

  return (
    <div className="App">
    <span className= "heading"> This is the Header</span>
      <InputField />
    </div>
  );
}

export default App;
