import { useTodos } from '../hooks/useTodos'
import { type Todo as TodoType } from '../types'

interface Props {
  todo: TodoType
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { handleCompleted, handleRemove } = useTodos()

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          handleCompleted(todo.id, e.target.checked)
        }}
      />
      <label>{todo.title}</label>
      <button
        className="destroy"
        onClick={() => {
          handleRemove(todo.id)
        }}
      />
    </div>
  )
}
