import React from 'react';
import './styles.css';

export const InputField = () => {
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
