import { useEffect, useReducer } from 'react'
import { TODO_FILTERS } from '../consts'
import { type FilterValue, type TodosReducer } from '../types'
import { initialState, reducer } from '../reducers/todos'
import { fetchTodos, updateTodos } from '../services/todos'

export const useTodosReducer = (): TodosReducer => {
  const [{ sync, todos, filterSelected }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const handleCompleted = (id: string, completed: boolean): void => {
    dispatch({ type: 'COMPLETED', payload: { id, completed } })
  }

  const handleRemove = (id: string): void => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  const handleUpdateTitle = ({
    id,
    title
  }: {
    id: string
    title: string
  }): void => {
    dispatch({ type: 'UPDATE_TITLE', payload: { id, title } })
  }

  const handleSave = (title: string): void => {
    dispatch({ type: 'SAVE', payload: { title } })
  }

  const handleClearCompleted = (): void => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  const handleFilterChange = (filter: FilterValue): void => {
    dispatch({ type: 'FILTER_CHANGE', payload: { filter } })

    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    )
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return true
  })

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.length - completedCount

  useEffect(() => {
    fetchTodos()
      .then((todos) => {
        dispatch({ type: 'INIT_TODOS', payload: { todos } })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (sync) {
      updateTodos({ todos }).catch((err) => {
        console.error(err)
      })
    }
  }, [todos, sync])

  return {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos
  }
}
