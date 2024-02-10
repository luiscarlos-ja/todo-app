export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export interface TodoContextType {
  todos: Todo[]
  addTodo: (title: TodoTitle) => void
  removeTodo: (id: TodoId) => void
  toggleCompleted: (id: TodoId) => void
}
