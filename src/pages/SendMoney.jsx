import { useState } from 'react'

function SendMoney() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [note, setNote] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    alert(`Sending $${amount} to ${recipient}`)
  }

  const quickAmounts = [10, 25, 50, 100]
  const recentContacts = [
    { name: 'John Doe', avatar: 'JD', lastTransaction: 'Yesterday' },
    { name: 'Sarah Wilson', avatar: 'SW', lastTransaction: '3 days ago' },
    { name: 'Mike Johnson', avatar: 'MJ', lastTransaction: '1 week ago' }
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-3">Send Money</h1>
          <p className="text-gray-600 text-lg">Transfer funds instantly to anyone</p>
        </div>

        <div className="space-y-8">
          {/* Main Send Form */}
          <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSend} className="space-y-6">
              {/* Recipient Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Send to
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Enter username, email, or phone"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg placeholder-gray-400"
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
                    className="w-full pl-12 pr-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold text-center transition-all"
                    required
                  />
                </div>
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

              {/* Note Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Add a note (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What's this payment for?"
                  rows={3}
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="btn-hover w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-5 rounded-2xl shadow-xl text-lg"
                disabled={!amount || !recipient}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>💸</span>
                  <span>Send ${amount || '0.00'}</span>
                </div>
              </button>
            </form>
          </div>

          {/* Recent Recipients */}
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Recipients</h3>
            <div className="space-y-3">
              {recentContacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => setRecipient(contact.name)}
                  className="card-hover w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {contact.avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{contact.name}</p>
                      <p className="text-gray-500 text-sm">Last sent: {contact.lastTransaction}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Send Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Send via QR Code</h4>
              <p className="text-gray-600 text-sm">Scan recipient's QR code</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📞</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Send via Contacts</h4>
              <p className="text-gray-600 text-sm">Select from phone contacts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney