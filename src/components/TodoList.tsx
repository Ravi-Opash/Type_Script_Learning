import React from "react";
import classes from './TodoList.module.css'

const TodoList: React.FC<{ text: string, removeItem: () => void }> = (props) => {

  return (
        <li onClick={props.removeItem} className={classes.item}>{props.text}</li>
  );
};

export default TodoList;
