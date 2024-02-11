import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export interface TodosReducer {
  activeCount: number
  completedCount: number
  todos: TodoList
  filterSelected: FilterValue
  handleClearCompleted: () => void
  handleCompleted: (id: string, completed: boolean) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemove: (id: string) => void
  handleSave: (title: string) => void
  handleUpdateTitle: (params: { id: string; title: string }) => void
}

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
export type TodoList = Todo[]
