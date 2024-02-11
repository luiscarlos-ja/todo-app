export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const KEY_CODES = {
  ENTER: 13,
  ESCAPE: 27
} as const

export const TODOS_ACTION_TYPES = {
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  COMPLETED: 'COMPLETED',
  FILTER_CHANGE: 'FILTER_CHANGE',
  INIT_TODOS: 'INIT_TODOS',
  REMOVE: 'REMOVE',
  SAVE: 'SAVE',
  UPDATE_TITLE: 'UPDATE_TITLE'
} as const
