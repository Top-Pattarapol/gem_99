import { useState } from 'react'

function RequestMoney() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('')
  const [reason, setReason] = useState('')

  const handleRequest = (e) => {
    e.preventDefault()
    // Handle request money logic here
    alert(`Requesting $${amount} from ${from}`)
  }

  const quickAmounts = [20, 50, 100, 200]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Request Money</h1>
          <p className="text-gray-600">Ask friends to send you money</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleRequest} className="space-y-6">
            {/* From Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Request from
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter username, email, or phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                  $
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-xl"
                  required
                />
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Common amounts</p>
              <div className="grid grid-cols-4 gap-2">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    type="button"
                    onClick={() => setAmount(quickAmount.toString())}
                    className="py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ${quickAmount}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's this for?
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Dinner, rent, utilities, etc."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Request Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Request ${amount || '0.00'}
            </button>
          </form>
        </div>

        {/* Pending Requests */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Requests</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">Dinner split</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">$45.00</p>
                <p className="text-xs text-yellow-600">Pending</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SW</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Sarah Wilson</p>
                  <p className="text-sm text-gray-600">Movie tickets</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">$25.00</p>
                <p className="text-xs text-green-600">Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestMoney