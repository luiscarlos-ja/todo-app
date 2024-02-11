import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const { handleSave } = useTodos()
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      handleSave(inputValue)
      setInputValue('')
    }
  }

  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      onKeyDown={handleKeyDown}
      placeholder="What is your next task?"
      autoFocus
    />
  )
}
