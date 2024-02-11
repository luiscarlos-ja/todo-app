import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'
import { Todo } from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Todos: React.FC = () => {
  const { todos } = useTodos()
  const [parent] = useAutoAnimate()
  const [isEditing, setIsEditing] = useState('')

  return (
    <ul className="todo-list" ref={parent}>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className={`
        ${todo.completed ? 'completed' : ''}
        ${isEditing === todo.id ? 'editing' : ''}
      `}
          onDoubleClick={() => {
            setIsEditing(todo.id)
          }}
        >
          <Todo todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
        </li>
      ))}
    </ul>
  )
}
