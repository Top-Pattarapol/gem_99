import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '💼' },
    { path: '/send', label: 'Send', icon: '💸' },
    { path: '/request', label: 'Request', icon: '🤝' },
    { path: '/transactions', label: 'History', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-2xl z-50 backdrop-blur-lg">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                PayWise
              </span>
            </div>
          </div>
          
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </nav>
  )
}

export default Navigation