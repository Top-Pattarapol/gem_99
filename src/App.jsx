import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import RequestMoney from './pages/RequestMoney'
import Transactions from './pages/Transactions'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="/request" element={<RequestMoney />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
