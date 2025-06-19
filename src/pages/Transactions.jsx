import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Transactions() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [transactions] = useState([
    { id: 1, type: 'received', amount: 150.00, from: 'John Doe', date: '2025-06-19', status: 'completed', category: 'personal' },
    { id: 2, type: 'sent', amount: 75.25, to: 'Sarah Wilson', date: '2025-06-18', status: 'completed', category: 'food' },
    { id: 3, type: 'received', amount: 200.00, from: 'Mike Johnson', date: '2025-06-17', status: 'completed', category: 'work' },
    { id: 4, type: 'sent', amount: 50.00, to: 'Emily Chen', date: '2025-06-16', status: 'pending', category: 'entertainment' },
    { id: 5, type: 'received', amount: 300.00, from: 'David Lee', date: '2025-06-15', status: 'completed', category: 'rent' },
    { id: 6, type: 'sent', amount: 25.50, to: 'Anna Brown', date: '2025-06-14', status: 'completed', category: 'food' },
    { id: 7, type: 'received', amount: 180.00, from: 'Tom Wilson', date: '2025-06-13', status: 'completed', category: 'personal' },
    { id: 8, type: 'sent', amount: 120.00, to: 'Lisa Garcia', date: '2025-06-12', status: 'completed', category: 'utilities' }
  ])

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true
    if (filter === 'sent') return transaction.type === 'sent'
    if (filter === 'received') return transaction.type === 'received'
    if (filter === 'pending') return transaction.status === 'pending'
    return true
  })

  const totalSent = transactions.filter(t => t.type === 'sent' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0)
  const totalReceived = transactions.filter(t => t.type === 'received' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md transition-all"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold">Back to Dashboard</span>
        </button>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-3">Transaction History</h1>
          <p className="text-gray-600 text-lg">View and analyze all your payment activities</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Sent</p>
                <p className="text-3xl font-bold text-red-500">-${totalSent.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mt-1">This month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">📤</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Received</p>
                <p className="text-3xl font-bold text-green-500">+${totalReceived.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mt-1">This month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">📥</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Net Flow</p>
                <p className={`text-3xl font-bold ${totalReceived - totalSent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {totalReceived - totalSent >= 0 ? '+' : ''}${(totalReceived - totalSent).toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm mt-1">This month</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Transactions */}
        <div className="glass rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Filter Buttons */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-wrap gap-3">
              {[
                { key: 'all', label: 'All Transactions', count: transactions.length },
                { key: 'sent', label: 'Sent', count: transactions.filter(t => t.type === 'sent').length },
                { key: 'received', label: 'Received', count: transactions.filter(t => t.type === 'received').length },
                { key: 'pending', label: 'Pending', count: transactions.filter(t => t.status === 'pending').length }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`btn-hover px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === filterOption.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'glass border border-white/20 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{filterOption.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      filter === filterOption.key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {filterOption.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Transactions List */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {filteredTransactions.length} Transaction{filteredTransactions.length !== 1 ? 's' : ''}
              </h3>
              <div className="glass px-4 py-2 rounded-xl border border-white/20">
                <span className="text-sm text-gray-600">Last 30 days</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <div key={transaction.id} className={`card-hover p-5 rounded-2xl border bg-gradient-to-r ${
                  transaction.type === 'received' 
                    ? 'border-green-200 from-green-50 to-emerald-50' 
                    : 'border-blue-200 from-blue-50 to-indigo-50'
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
                        <p className="font-bold text-gray-900 text-lg">
                          {transaction.type === 'received' ? transaction.from : transaction.to}
                        </p>
                        <div className="flex items-center space-x-3 mt-1">
                          <p className="text-gray-600">{transaction.date}</p>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span className="text-xs bg-white/70 px-2 py-1 rounded-full text-gray-600 capitalize font-medium">
                            {transaction.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${
                        transaction.type === 'received' ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {transaction.type === 'received' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </p>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
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
    </div>
  )
}

export default Transactions