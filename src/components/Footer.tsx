import { useTodos } from '../hooks/useTodos'
import { Filters } from './Filters'

export function Footer(): JSX.Element {
  const {
    activeCount,
    filterSelected,
    handleFilterChange,
    completedCount,
    handleClearCompleted
  } = useTodos()
  const activeTodoWord = activeCount === 1 ? 'task' : 'tasks'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending {activeTodoWord}
      </span>

      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Delete completed
        </button>
      )}
    </footer>
  )
}
