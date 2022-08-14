import React from 'react'
import { ToDo } from './ToDo'

export const ToDos = (props) => {
  let Mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={Mystyle}>
    <h3 className=' my-3'>ToDos List</h3>
    {props.todos.length===0?"No ToDos to display":
    props.todos.map((todo)=>{
        return (
          <>
        <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr />
        </>
        )
    })}
    
    
    </div>
  )
}
