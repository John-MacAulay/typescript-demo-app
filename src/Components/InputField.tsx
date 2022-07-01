import React from 'react';
import './styles.css';

interface inputFieldPropsTypes{
  toDo: string;
  setToDoItem: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({toDo, setToDoItem, handleAdd} :inputFieldPropsTypes) => {

  return (
    <form
     className='input'
      onSubmit={handleAdd} >
      <input type='input'
         value = {toDo}
         onChange ={
          (e)=> setToDoItem(e.target.value)
         }
      placeholder='Enter your Task' className='input__box' />
      <button className='input_submit' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default InputField
