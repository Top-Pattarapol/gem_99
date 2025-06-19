import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Page1 from './pages/Page1'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
