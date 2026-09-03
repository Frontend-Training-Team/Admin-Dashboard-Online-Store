import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-900 text-white">
        <Sidebar />
      </div>
    </BrowserRouter>
  )
}

export default App;