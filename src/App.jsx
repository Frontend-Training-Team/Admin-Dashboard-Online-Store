import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-surface-light text-brand-900">
        <Sidebar />
      </div>
    </BrowserRouter>
  )
}

export default App;