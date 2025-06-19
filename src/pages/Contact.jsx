function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-100">
      <main className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Contact Us</h1>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">@</span>
            </div>
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📞</span>
            </div>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📍</span>
            </div>
            <span>San Francisco, CA</span>
          </div>
        </div>
        <p className="text-gray-500 mt-6 text-sm">
          Get in touch with us for any questions!
        </p>
      </main>
    </div>
  )
}

export default Contact