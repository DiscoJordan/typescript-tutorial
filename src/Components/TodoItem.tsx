import React from 'react'
import { ITodo, IUser } from '../types/types'

interface TodoItemProps{
    todo:ITodo
}

const TodoItem = ({todo}:TodoItemProps) => {

  return (
    <>

 
        <h3>info</h3>
        userId: {todo?.userId}
        id: {todo?.id}
        title: {todo?.title}
        <input type='checkbox' checked={todo.completed}/>
    </>
  )
}
 
export default TodoItem