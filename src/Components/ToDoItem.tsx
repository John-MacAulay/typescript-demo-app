import React from 'react';
import { toDoItem } from "../model";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
import "./styles.css"

interface ToDoItemProps{
    toDoItem: toDoItem;
    toDoItemList: toDoItem[];
    setToDoItemList : React.Dispatch<React.SetStateAction<toDoItem[]>>;
    
};

const ToDoItem = ({toDoItem, toDoItemList, setToDoItemList}:ToDoItemProps) => {

  return (
    <form className='toDo__Item'>
      <span className='toDo__Item--text'>{toDoItem.toDoText}</span>
      <div>
        <span className='icon'>
          < AiFillEdit/>
        </span>
        <span className='icon'>
          <AiFillDelete/>
        </span>
        <span className='icon'>
          <MdDone/>
        </span>
      </div>
    </form>
  )
  
}

export default ToDoItem