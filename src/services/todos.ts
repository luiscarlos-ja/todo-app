import { type Todo, type TodoList } from '../types'

const API_URL = 'https://api.jsonbin.io/v3/b/65c95361266cfc3fde88f60c'

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL, {
    headers: {
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY
    },
    method: 'GET'
  })
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { record: todos } = (await res.json()) as { record: Todo[] }
  return todos
}

export const updateTodos = async ({
  todos
}: {
  todos: TodoList
}): Promise<boolean> => {
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY
    },
    body: JSON.stringify(todos)
  })

  return res.ok
}
