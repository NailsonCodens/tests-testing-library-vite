'use client'

import DeleteButtom from "./DeleteButtom"

type todoItemProps = {
  itemTodo: {
    id: string
    task: string
    date: string  
  }
}

export default function TodoItem({itemTodo}: todoItemProps){
  const deleteItem = async (id: string) => {
    console.log(id)
  }

  return (
    <div>
      <p>{itemTodo.task}</p>
      <p>{itemTodo.date}</p>
      <button>Editar</button>
      <DeleteButtom id={itemTodo.id} onClick={deleteItem}/>
    </div>
  )
}