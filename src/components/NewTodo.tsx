import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos.context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
    const todoInputRef  = useRef<HTMLInputElement>(null);

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
 
        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //ERROR
            return;
        } 

        todosCtx.addTodo(enteredText);
    };

  return <form onSubmit={onFormSubmit} className={classes.form}>
    <label htmlFor='text'>Todo text</label>
    <input ref={todoInputRef} id='text' type={'text'} />
    <button>Add Todo</button>
  </form>;
};

export default NewTodo;
