import { createContext } from 'react'
import { type TodosReducer } from '../types'
import { useTodosReducer } from '../hooks/useTodosReducer'

export const TodoContext = createContext<TodosReducer | undefined>(undefined)

export function TodoProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos
  } = useTodosReducer()

  return (
    <TodoContext.Provider
      value={{
        activeCount,
        completedCount,
        filterSelected,
        handleClearCompleted,
        handleCompleted,
        handleFilterChange,
        handleRemove,
        handleSave,
        handleUpdateTitle,
        todos
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
