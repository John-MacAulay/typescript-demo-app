import React, {useRef} from 'react';
import './styles.css';


interface inputFieldPropsTypes{
  toDo: string;
  setToDoItem: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({toDo, setToDoItem, handleAdd} :inputFieldPropsTypes) => {
  const inputFormRef = useRef<HTMLInputElement>(null)

  return (
    <form
     className='input'
      onSubmit={(e) =>{
        handleAdd(e);
        inputFormRef.current?.blur();                      // so this gets rid of the focus shadow after form is submitted
        }} >
      <input
         ref = {inputFormRef}
         type='input'
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
