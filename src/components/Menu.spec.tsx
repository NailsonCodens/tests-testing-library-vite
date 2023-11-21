import { describe, it } from 'vitest'
import {render, screen} from '@testing-library/react';
import Menu from './Menu';


describe('Suite Test Menu', () => {
  it('Should render and show menu home', () => {
    render(<Menu/>)

    expect(screen.getByText(/Home/i)).toBeInTheDocument()

  })  

  it('Should render and show menu adicionar tarefas', () => {
    render(<Menu/>)
    expect(screen.getByText(/Adicionar tarefas/i)).toBeInTheDocument()

  })    

  it('Should render and show menu Métricas', () => {
    render(<Menu/>)
    expect(screen.getByText(/Métricas/i)).toBeInTheDocument()
  })      


  it('Should render and click menu home', () => {
    render(<Menu/>)
    expect(screen.getByText('Home').closest('a')?.href).toEqual('http://localhost:3000/home');
  })        

  it('Should render and clic menu  adicionar tarefas', () => {
    render(<Menu/>)
    expect(screen.getByText('Adicionar tarefas').closest('a')?.href).toEqual('http://localhost:3000/todo/create');
  })

  it('Should render and clic menu  métricas', () => {
    render(<Menu/>)
    expect(screen.getByText('Métricas').closest('a')?.href).toEqual('http://localhost:3000/metrics');
  })  
})