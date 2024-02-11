import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import { type TodosReducer } from '../types'

export function useTodos(): TodosReducer {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider')
  }
  return context
}
