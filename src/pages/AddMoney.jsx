import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMoney() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAddMoney = async (e) => {
    e.preventDefault()
    if (!selectedMethod) {
      alert('Please select a funding source')
      return
    }
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(`Successfully added $${amount} from ${selectedMethod}`)
      navigate('/')
    }, 2000)
  }

  const quickAmounts = [25, 50, 100, 250]
  const paymentMethods = [
    { id: 'bank1', name: 'Chase Checking', type: 'bank', last4: '4829', icon: '🏦' },
    { id: 'card1', name: 'Visa Credit', type: 'card', last4: '1234', icon: '💳' },
    { id: 'card2', name: 'Mastercard Debit', type: 'card', last4: '5678', icon: '💳' }
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md transition-all"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold">Back to Dashboard</span>
        </button>
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-3">Add Money</h1>
          <p className="text-gray-600 text-lg">Add funds to your PayWise wallet</p>
        </div>

        <div className="space-y-8">
          {/* Main Add Money Form */}
          <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleAddMoney} className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amount to Add
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
                    min="1.00"
                    max="5000.00"
                    className="w-full pl-12 pr-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-2xl font-bold text-center transition-all"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Minimum: $1.00 • Maximum: $5,000.00</p>
              </div>

              {/* Quick Amount Buttons */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Quick amounts</p>
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

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Funding Source
                </label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`card-hover flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? 'border-green-300 bg-gradient-to-r from-green-50 to-emerald-50'
                          : 'border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">{method.icon}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{method.name}</p>
                            <p className="text-gray-600 text-sm">•••• {method.last4}</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedMethod === method.id
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedMethod === method.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add Money Button */}
              <button
                type="submit"
                disabled={!amount || !selectedMethod || isLoading}
                className="btn-hover w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 rounded-2xl shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>💰</span>
                      <span>Add ${amount || '0.00'}</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>

          {/* Recent Deposits */}
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Deposits</h3>
              <div className="glass px-3 py-1 rounded-full">
                <span className="text-sm text-gray-600">Last 7 days</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="card-hover p-5 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🏦</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Chase Checking</p>
                      <p className="text-gray-600">June 18, 2025</p>
                      <p className="text-green-600 text-sm font-medium">Completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">+$200.00</p>
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Instant
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-hover p-5 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">💳</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Visa Credit</p>
                      <p className="text-gray-600">June 16, 2025</p>
                      <p className="text-blue-600 text-sm font-medium">Completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">+$100.00</p>
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      Standard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Money Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Transfer</h4>
              <p className="text-gray-600 text-sm">Available immediately with a small fee</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h4>
              <p className="text-gray-600 text-sm">Your funds are protected and insured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMoney