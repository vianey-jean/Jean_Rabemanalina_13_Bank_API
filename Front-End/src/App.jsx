import {useRoutes} from 'react-router-dom'
import {routes} from './router/Routes'



function App() {
  let elementsToDisplay = useRoutes(routes)
  return (
    <main className="App">
       {elementsToDisplay}
    </main>
  )
}

export default App