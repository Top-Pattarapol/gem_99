import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [balance] = useState(2450.75)
  const navigate = useNavigate()
  const [recentTransactions] = useState([
    { id: 1, type: 'received', amount: 150.00, from: 'John Doe', date: '2025-06-19', status: 'completed' },
    { id: 2, type: 'sent', amount: 75.25, to: 'Sarah Wilson', date: '2025-06-18', status: 'completed' },
    { id: 3, type: 'received', amount: 200.00, from: 'Mike Johnson', date: '2025-06-17', status: 'completed' },
    { id: 4, type: 'sent', amount: 50.00, to: 'Emily Chen', date: '2025-06-16', status: 'pending' }
  ])

  const handleAddMoney = () => {
    navigate('/add-money')
  }

  const handleLinkCard = () => {
    navigate('/link-card')
  }

  const handleViewAllTransactions = () => {
    navigate('/transactions')
  }

  const handleSendMoney = () => {
    navigate('/send')
  }

  const handleRequestMoney = () => {
    navigate('/request')
  }

  const handleAnalytics = () => {
    alert('Analytics feature - Coming soon! Track your spending patterns and financial insights')
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Good morning, Alex ☀️</h1>
              <p className="text-gray-600 text-lg">Here's your financial overview for today</p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-sm text-gray-600">Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Balance Card */}
            <div className="relative overflow-hidden">
              <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Total Balance</p>
                      <h2 className="text-5xl font-bold gradient-text">${balance.toLocaleString()}</h2>
                      <div className="flex items-center mt-2">
                        <span className="text-green-500 text-sm font-medium">+12.5%</span>
                        <span className="text-gray-500 text-sm ml-2">from last month</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">💰</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={handleAddMoney}
                      className="btn-hover bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-blue-200 font-semibold text-blue-700 flex items-center justify-center space-x-2 shadow-lg hover:bg-white hover:border-blue-300 hover:shadow-xl"
                    >
                      <span className="text-xl">➕</span>
                      <span>Add Money</span>
                    </button>
                    <button 
                      onClick={handleLinkCard}
                      className="btn-hover bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-purple-200 font-semibold text-purple-700 flex items-center justify-center space-x-2 shadow-lg hover:bg-white hover:border-purple-300 hover:shadow-xl"
                    >
                      <span className="text-xl">💳</span>
                      <span>Link Card</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="glass rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">Recent Activity</h3>
                  <button 
                    onClick={handleViewAllTransactions}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    View All →
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={transaction.id} className={`card-hover p-5 rounded-2xl border border-gray-100 bg-gradient-to-r ${
                      transaction.type === 'received' 
                        ? 'from-green-50 to-emerald-50' 
                        : 'from-blue-50 to-indigo-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                            transaction.type === 'received' 
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                              : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                          }`}>
                            <span className="text-white text-xl font-bold">
                              {transaction.type === 'received' ? '↓' : '↑'}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-lg">
                              {transaction.type === 'received' ? transaction.from : transaction.to}
                            </p>
                            <p className="text-gray-600">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-bold ${
                            transaction.type === 'received' ? 'text-green-600' : 'text-gray-900'
                          }`}>
                            {transaction.type === 'received' ? '+' : '-'}${transaction.amount.toFixed(2)}
                          </p>
                          <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button 
                  onClick={handleSendMoney}
                  className="card-hover w-full p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                      <span className="text-3xl">💸</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-xl">Send Money</h4>
                      <p className="text-blue-100 text-sm">Transfer to anyone</p>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleRequestMoney}
                  className="card-hover w-full p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-xl">Request</h4>
                      <p className="text-purple-100 text-sm">Ask for payment</p>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleAnalytics}
                  className="card-hover w-full p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                      <span className="text-3xl">📊</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-xl">Analytics</h4>
                      <p className="text-emerald-100 text-sm">View insights</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">This Month</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Money Sent</span>
                  <span className="font-semibold text-gray-900">$1,240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Money Received</span>
                  <span className="font-semibold text-green-600">+$2,180</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transactions</span>
                  <span className="font-semibold text-gray-900">47</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Net Income</span>
                    <span className="font-bold text-green-600 text-lg">+$940</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard