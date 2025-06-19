import { useState } from 'react'

function Transactions() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Transaction History</h1>
          <p className="text-gray-600">View all your payment activities</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Sent</p>
                <p className="text-2xl font-bold text-red-600">-${totalSent.toFixed(2)}</p>
              </div>
              <div className="text-3xl">📤</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Received</p>
                <p className="text-2xl font-bold text-green-600">+${totalReceived.toFixed(2)}</p>
              </div>
              <div className="text-3xl">📥</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Net Flow</p>
                <p className={`text-2xl font-bold ${totalReceived - totalSent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalReceived - totalSent >= 0 ? '+' : ''}${(totalReceived - totalSent).toFixed(2)}
                </p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Transactions' },
              { key: 'sent', label: 'Sent' },
              { key: 'received', label: 'Received' },
              { key: 'pending', label: 'Pending' }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === filterOption.key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              {filteredTransactions.length} Transaction{filteredTransactions.length !== 1 ? 's' : ''}
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
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
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 capitalize">
                          {transaction.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions