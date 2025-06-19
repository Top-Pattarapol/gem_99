import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LinkCard() {
  const navigate = useNavigate()
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [billingZip, setBillingZip] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLinkCard = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(`Successfully linked card ending in ${cardNumber.slice(-4)}`)
      navigate('/')
    }, 2000)
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.length <= 19) { // 16 digits + 3 spaces
      setCardNumber(formatted)
    }
  }

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value)
    if (formatted.length <= 5) {
      setExpiryDate(formatted)
    }
  }

  const getCardType = (number) => {
    const num = number.replace(/\s/g, '')
    if (num.startsWith('4')) return { type: 'Visa', icon: '💳', color: 'from-blue-500 to-blue-600' }
    if (num.startsWith('5')) return { type: 'Mastercard', icon: '💳', color: 'from-red-500 to-red-600' }
    if (num.startsWith('3')) return { type: 'American Express', icon: '💳', color: 'from-green-500 to-green-600' }
    return { type: 'Card', icon: '💳', color: 'from-gray-500 to-gray-600' }
  }

  const cardInfo = getCardType(cardNumber)

  const linkedCards = [
    { id: 1, name: 'Visa Credit', last4: '1234', type: 'Credit', brand: 'Visa', primary: true },
    { id: 2, name: 'Mastercard Debit', last4: '5678', type: 'Debit', brand: 'Mastercard', primary: false }
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
          <h1 className="text-4xl font-bold gradient-text mb-3">Link Card</h1>
          <p className="text-gray-600 text-lg">Add a new payment method to your account</p>
        </div>

        <div className="space-y-8">
          {/* Card Preview */}
          <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className={`relative h-48 bg-gradient-to-br ${cardInfo.color} rounded-2xl p-6 text-white shadow-2xl overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-2xl">{cardInfo.icon}</div>
                  <div className="text-right">
                    <p className="text-xs opacity-75">PayWise</p>
                    <p className="text-sm font-semibold">{cardInfo.type}</p>
                  </div>
                </div>
                
                <div>
                  <div className="text-xl font-mono tracking-wider mb-3">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-75">CARDHOLDER</p>
                      <p className="text-sm font-semibold">
                        {cardholderName || 'Your Name'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs opacity-75">EXPIRES</p>
                      <p className="text-sm font-semibold">
                        {expiryDate || 'MM/YY'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link Card Form */}
          <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleLinkCard} className="space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono transition-all"
                  required
                />
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                  placeholder="JOHN DOE"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all"
                  required
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono transition-all"
                    required
                  />
                </div>
              </div>

              {/* Billing ZIP */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Billing ZIP Code
                </label>
                <input
                  type="text"
                  value={billingZip}
                  onChange={(e) => setBillingZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="12345"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all"
                  required
                />
              </div>

              {/* Security Notice */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-800 mb-1">Your card is secure</p>
                    <p className="text-sm text-green-700">
                      We use bank-level encryption to protect your payment information. 
                      Your card details are never stored on our servers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link Card Button */}
              <button
                type="submit"
                disabled={!cardNumber || !cardholderName || !expiryDate || !cvv || !billingZip || isLoading}
                className="btn-hover w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-5 rounded-2xl shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Linking Card...</span>
                    </>
                  ) : (
                    <>
                      <span>💳</span>
                      <span>Link Card</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>

          {/* Already Linked Cards */}
          <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Your Cards</h3>
              <div className="glass px-3 py-1 rounded-full">
                <span className="text-sm text-gray-600">{linkedCards.length} linked</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {linkedCards.map((card) => (
                <div key={card.id} className="card-hover p-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl">💳</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-semibold text-gray-900 text-lg">{card.name}</p>
                          {card.primary && (
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                              Primary
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">•••• •••• •••• {card.last4}</p>
                        <p className="text-sm text-gray-500">{card.brand} {card.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Payments</h4>
              <p className="text-gray-600 text-sm">Send money instantly with your linked card</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Auto Add Money</h4>
              <p className="text-gray-600 text-sm">Automatically top up your wallet</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure & Protected</h4>
              <p className="text-gray-600 text-sm">Advanced fraud protection included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkCard