import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const [user] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    avatar: 'AJ',
    memberSince: '2023-01-15',
    verified: true
  })

  const [settings, setSettings] = useState({
    notifications: true,
    twoFactor: true,
    emailUpdates: false,
    privacy: 'friends'
  })

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }))
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center space-x-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md transition-all"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold">Back to Dashboard</span>
        </button>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-3">Profile & Settings</h1>
          <p className="text-gray-600 text-lg">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-start space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-3xl">{user.avatar}</span>
                  </div>
                  {user.verified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                    {user.verified && (
                      <div className="glass px-3 py-1 rounded-full border border-green-200">
                        <span className="text-green-600 text-sm font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 mb-4">
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📧</span>
                      {user.email}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📱</span>
                      {user.phone}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <span className="mr-2">📅</span>
                      Member since {new Date(user.memberSince).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="btn-hover bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🔔</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Push Notifications</p>
                      <p className="text-gray-600 text-sm">Get notified about transactions</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🔐</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                      <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.twoFactor}
                      onChange={(e) => handleSettingChange('twoFactor', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">📬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Updates</p>
                      <p className="text-gray-600 text-sm">Receive weekly summary emails</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={(e) => handleSettingChange('emailUpdates', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-8">
            {/* Security Actions */}
            <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Security</h3>
              <div className="space-y-3">
                <button className="card-hover w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white">🔑</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Change Password</p>
                      <p className="text-gray-600 text-sm">Update your password</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>

                <button className="card-hover w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white">🔒</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Privacy Settings</p>
                      <p className="text-gray-600 text-sm">Control who can send you money</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>

                <button className="card-hover w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white">📱</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Connected Devices</p>
                      <p className="text-gray-600 text-sm">Manage logged-in devices</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </div>

            {/* Support & Legal */}
            <div className="glass rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Support & Legal</h3>
              <div className="space-y-3">
                <button className="card-hover w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white">❓</span>
                    </div>
                    <span className="font-semibold text-gray-900">Help & Support</span>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>

                <button className="card-hover w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white">📄</span>
                    </div>
                    <span className="font-semibold text-gray-900">Terms & Privacy</span>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </div>

            {/* Sign Out */}
            <div className="glass rounded-2xl p-4 border border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
              <button className="card-hover w-full flex items-center justify-between p-4 transition-all text-red-600 hover:text-red-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white">🚪</span>
                  </div>
                  <span className="font-semibold">Sign Out</span>
                </div>
                <span className="text-red-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile