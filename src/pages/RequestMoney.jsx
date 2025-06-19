import { useState } from 'react'

function RequestMoney() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('')
  const [reason, setReason] = useState('')

  const handleRequest = (e) => {
    e.preventDefault()
    alert(`Requesting $${amount} from ${from}`)
  }

  const quickAmounts = [20, 50, 100, 200]

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-3">Request Money</h1>
          <p className="text-gray-600 text-lg">Ask friends to send you money</p>
        </div>

        <div className="space-y-8">
          {/* Main Request Form */}
          <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleRequest} className="space-y-6">
              {/* From Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Request from
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter username, email, or phone"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-lg placeholder-gray-400"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-400">👤</span>
                  </div>
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0.01"
                    className="w-full pl-12 pr-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-2xl font-bold text-center transition-all"
                    required
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Common amounts</p>
                <div className="grid grid-cols-4 gap-3">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="btn-hover py-3 px-4 glass border border-white/20 rounded-xl font-semibold text-gray-800 transition-all"
                    >
                      ${quickAmount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reason Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What's this for?
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Dinner, rent, utilities, etc."
                  rows={3}
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                  required
                />
              </div>

              {/* Request Button */}
              <button
                type="submit"
                className="btn-hover w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-5 rounded-2xl shadow-xl text-lg"
                disabled={!amount || !from || !reason}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>🤝</span>
                  <span>Request ${amount || '0.00'}</span>
                </div>
              </button>
            </form>
          </div>

          {/* Pending Requests */}
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Your Requests</h3>
              <div className="glass px-3 py-1 rounded-full">
                <span className="text-sm text-gray-600">2 Active</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="card-hover p-5 rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">John Doe</p>
                      <p className="text-gray-600">Dinner split</p>
                      <p className="text-yellow-600 text-sm font-medium">Sent 2 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">$45.00</p>
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-hover p-5 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">SW</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Sarah Wilson</p>
                      <p className="text-gray-600">Movie tickets</p>
                      <p className="text-green-600 text-sm font-medium">Paid yesterday</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">$25.00</p>
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Request Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Send Reminder</h4>
              <p className="text-gray-600 text-sm">Follow up on pending requests</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Share QR Code</h4>
              <p className="text-gray-600 text-sm">Let others scan to pay you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestMoney