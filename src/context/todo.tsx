import { createContext, useState } from 'react'
import {
  type Todo,
  type TodoContextType,
  type TodoTitle,
  type TodoId
} from '../types'

const mockTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Learn GraphQL',
    completed: false
  }
]

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)

  const removeTodo = ({ id }: TodoId): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = ({ id }: TodoId): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const addTodo = ({ title }: TodoTitle): void => {
    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: prevTodos.length + 1,
        title,
        completed: false
      }
      return [newTodo, ...prevTodos]
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
