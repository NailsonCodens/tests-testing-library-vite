'use client'

type deleteButtomProps = {
  id: string
  onClick: (id: string) => void
}


export default function DeleteButtom({id, onClick}:deleteButtomProps){
  return (
    <button onClick={() => onClick(id)}>Deletar</button>
  )
}