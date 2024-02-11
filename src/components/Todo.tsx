import { useEffect, useRef, useState } from 'react'
import { useTodos } from '../hooks/useTodos'
import { type Todo as TodoType } from '../types'

interface Props {
  todo: TodoType
  isEditing: string
  setIsEditing: (id: string) => void
}

export const Todo: React.FC<Props> = ({ todo, isEditing, setIsEditing }) => {
  const { handleCompleted, handleRemove, handleUpdateTitle } = useTodos()
  const [editedTitle, setEditedTitle] = useState(todo.title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== todo.title) {
        handleUpdateTitle({ id: todo.id, title: editedTitle })
      }

      if (editedTitle === '') handleRemove(todo.id)

      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(todo.title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
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
      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
        ref={inputEditTitle}
      />
    </>
  )
}
