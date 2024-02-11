import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'

function App(): JSX.Element {
  return (
    <div className="todoapp">
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}

export default App
