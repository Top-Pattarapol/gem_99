import { useState } from 'react'

function Dashboard() {
  const [balance] = useState(2450.75)
  const [recentTransactions] = useState([
    { id: 1, type: 'received', amount: 150.00, from: 'John Doe', date: '2025-06-19', status: 'completed' },
    { id: 2, type: 'sent', amount: 75.25, to: 'Sarah Wilson', date: '2025-06-18', status: 'completed' },
    { id: 3, type: 'received', amount: 200.00, from: 'Mike Johnson', date: '2025-06-17', status: 'completed' },
    { id: 4, type: 'sent', amount: 50.00, to: 'Emily Chen', date: '2025-06-16', status: 'pending' }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-green-100 text-sm font-medium">Total Balance</p>
              <h2 className="text-4xl font-bold">${balance.toLocaleString()}</h2>
            </div>
            <div className="text-6xl opacity-20">💰</div>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all">
              + Add Money
            </button>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all">
              💳 Link Card
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">💸</div>
            <h3 className="font-semibold text-gray-800">Send Money</h3>
            <p className="text-gray-600 text-sm">Transfer to friends</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-gray-800">Request Money</h3>
            <p className="text-gray-600 text-sm">Ask for payment</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-800">Analytics</h3>
            <p className="text-gray-600 text-sm">View spending</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-800">Security</h3>
            <p className="text-gray-600 text-sm">Account settings</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Recent Transactions</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      transaction.type === 'received' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {transaction.type === 'received' ? '↓' : '↑'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {transaction.type === 'received' ? transaction.from : transaction.to}
                      </p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'received' ? 'text-green-600' : 'text-gray-800'
                    }`}>
                      {transaction.type === 'received' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </p>
                    <p className={`text-xs ${
                      transaction.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard