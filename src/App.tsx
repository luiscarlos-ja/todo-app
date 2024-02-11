import { Footer } from './components/Footer'
import { Todos } from './components/Todos'

function App(): JSX.Element {
  return (
    <div className="todoapp">
      <Todos />
      <Footer />
    </div>
  )
}

export default App
