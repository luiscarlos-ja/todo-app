import { TODO_FILTERS } from '../consts'
import { type FilterValue, type TodoList } from '../types'

export const initialState = {
  sync: false,
  todos: [
    {
      id: '1',
      title: 'Learn React',
      completed: true
    },
    {
      id: '2',
      title: 'Learn TypeScript',
      completed: false
    },
    {
      id: '3',
      title: 'Learn GraphQL',
      completed: false
    }
  ],
  filterSelected: (() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
    if (filter === null) return TODO_FILTERS.ALL
    // check filter is valid, if not return ALL
    return Object.values(TODO_FILTERS).includes(filter)
      ? filter
      : TODO_FILTERS.ALL
  })()
}

type Action =
  | { type: 'INIT_TODOS'; payload: { todos: TodoList } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED'; payload: { id: string; completed: boolean } }
  | { type: 'FILTER_CHANGE'; payload: { filter: FilterValue } }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'SAVE'; payload: { title: string } }
  | { type: 'UPDATE_TITLE'; payload: { id: string; title: string } }

interface State {
  sync: boolean
  todos: TodoList
  filterSelected: FilterValue
}

export const reducer = (state: State, action: Action): State => {
  if (action.type === 'INIT_TODOS') {
    const { todos } = action.payload
    return {
      ...state,
      sync: false,
      todos
    }
  }

  if (action.type === 'CLEAR_COMPLETED') {
    return {
      ...state,
      sync: true,
      todos: state.todos.filter((todo) => !todo.completed)
    }
  }

  if (action.type === 'COMPLETED') {
    const { id, completed } = action.payload
    return {
      ...state,
      sync: true,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }

        return todo
      })
    }
  }

  if (action.type === 'FILTER_CHANGE') {
    const { filter } = action.payload
    return {
      ...state,
      sync: true,
      filterSelected: filter
    }
  }

  if (action.type === 'REMOVE') {
    const { id } = action.payload
    return {
      ...state,
      sync: true,
      todos: state.todos.filter((todo) => todo.id !== id)
    }
  }

  if (action.type === 'SAVE') {
    const { title } = action.payload
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    return {
      ...state,
      sync: true,
      todos: [...state.todos, newTodo]
    }
  }

  if (action.type === 'UPDATE_TITLE') {
    const { id, title } = action.payload
    return {
      ...state,
      sync: true,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title
          }
        }

        return todo
      })
    }
  }

  return state
}
