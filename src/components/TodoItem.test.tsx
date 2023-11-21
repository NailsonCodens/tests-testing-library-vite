import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import TodoItem from "./TodoItem";

const item = {
  id: '01',
  task: "Fazer testes unitários no front end",
  date: "20/11/2023"
}

describe('Suite test TodoItem', () => {
  it('Should be show a list with items', () => {
    render(<TodoItem itemTodo={item}/>)

    const taskTodoItem = screen.getByText('Fazer testes unitários no front end')
    const tdateTodoItem = screen.getByText('Fazer testes unitários no front end')

    expect(taskTodoItem).toBeInTheDocument()
    expect(tdateTodoItem).toBeInTheDocument()

  })
})