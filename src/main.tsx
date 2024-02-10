import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'todomvc-app-css/index.css'
import { TodoProvider } from './context/todo.tsx'

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </React.StrictMode>
  )
}
