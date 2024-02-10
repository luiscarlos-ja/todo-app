import { useTodos } from '../hooks/useTodos'
import { Todo } from './Todo'

export const Todos: React.FC = () => {
  const { todos } = useTodos()

  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  )
}
