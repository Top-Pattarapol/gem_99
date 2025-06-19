import { useState } from 'react'

function SendMoney() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [note, setNote] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    // Handle send money logic here
    alert(`Sending $${amount} to ${recipient}`)
  }

  const quickAmounts = [10, 25, 50, 100]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Send Money</h1>
          <p className="text-gray-600">Transfer funds to friends and family</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleSend} className="space-y-6">
            {/* Recipient Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Send to
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter username, email, or phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl"
                  required
                />
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Quick amounts</p>
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

            {/* Note Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's this for?"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Send ${amount || '0.00'}
            </button>
          </form>
        </div>

        {/* Recent Recipients */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Recipients</h3>
          <div className="space-y-3">
            {['John Doe', 'Sarah Wilson', 'Mike Johnson'].map((name, index) => (
              <button
                key={index}
                onClick={() => setRecipient(name)}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-medium text-gray-800">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney