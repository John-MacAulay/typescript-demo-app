import React from "react";
import { toDoItem } from "../model";
import ToDoItem from "./ToDoItem";

interface ToDoListProps{
    toDoItemList: toDoItem [];
    setToDoItemList: React.Dispatch<React.SetStateAction<toDoItem[]>>;
}

const ToDoList = ({toDoItemList, setToDoItemList}: ToDoListProps) => {
  return (
    <div className="toDoItems" >
        {toDoItemList.map((toDoItem) =>(
            
            <ToDoItem
             toDoItem = {toDoItem}
             key = {toDoItem.id}
             toDoItemList ={toDoItemList}
             setToDoItemList = {setToDoItemList}
            />
        ))

    }</div>
  )
};

export default ToDoList;

