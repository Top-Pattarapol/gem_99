import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/send', label: 'Send', icon: '💸' },
    { path: '/request', label: 'Request', icon: '🤝' },
    { path: '/transactions', label: 'History', icon: '📈' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">PayWise</h1>
                <p className="text-xs text-gray-500 -mt-1">Peer-to-Peer</p>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-gray-800 shadow-lg backdrop-blur-sm'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="hidden sm:block">{item.label}</span>
                  </div>
                  
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  <span className="text-gray-600 font-semibold text-sm">AJ</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation