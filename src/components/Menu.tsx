'use client'

export default function Menu(){
  return(
    <nav>
      <a href="/home">
        Home
      </a>
      <a href="#">
        Tarefas
      </a>
      <a href="/todo/create">
        Adicionar tarefas
      </a>
      <a href="/metrics">
        Métricas
      </a>        
    </nav>
  )
}