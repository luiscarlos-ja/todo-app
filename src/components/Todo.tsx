import { useTodos } from '../hooks/useTodos'
import { type Todo as TodoType } from '../types'

interface Props {
  todo: TodoType
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { removeTodo, toggleCompleted } = useTodos()

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted({ id: todo.id })}
      />
      <label>{todo.title}</label>
      <button className="destroy" onClick={() => removeTodo({ id: todo.id })} />
    </div>
  )
}
