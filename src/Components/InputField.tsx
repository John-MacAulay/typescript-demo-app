import React from 'react';
import './styles.css';

interface inputFieldPropsTypes{
  toDoItem: string;
  setToDoItem: React.Dispatch<React.SetStateAction<string>>;

}

export const InputField = ({toDoItem, setToDoItem} :inputFieldPropsTypes) => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter your Task' className='input__box' />
      <button className='input_submit' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default InputField
