import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import RequestMoney from './pages/RequestMoney'
import Transactions from './pages/Transactions'
import Profile from './pages/Profile'
import AddMoney from './pages/AddMoney'
import LinkCard from './pages/LinkCard'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/request" element={<RequestMoney />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-money" element={<AddMoney />} />
          <Route path="/link-card" element={<LinkCard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
