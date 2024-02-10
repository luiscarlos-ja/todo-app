import { useContext } from 'react'
import { TodoContext } from '../context/todo'
import { type TodoContextType } from '../types'

export function useTodos(): TodoContextType {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider')
  }
  return context
}
