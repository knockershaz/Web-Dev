import './App.css';
import Header from './MyComponents/Header'
import { ToDos } from './MyComponents/ToDos';
import { Footer } from './MyComponents/Footer';
import React, {useState, useEffect} from 'react';
import { AddToDo } from './MyComponents/AddToDo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    // console.log("I am On Delete",todo);
    setTodos(todos.filter((e)=>
    {
      return e!==todo;
    }
    ))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0)
    {
        sno=0;
    }
    else{
      
        sno=todos[todos.length-1].sno+1;
    }
    const myToDo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myToDo]);
    // console.log(myToDo);
  }
  const[todos,setTodos]=useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Header title ={"My ToDo List"} searchBar={false} />
    <AddToDo addTodo={addTodo}/>
    <ToDos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
