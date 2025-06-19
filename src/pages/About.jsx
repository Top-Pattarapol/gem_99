function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <main className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          This is a demo React application built with:
        </p>
        <ul className="text-left text-gray-600 space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            React 19.1.0
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Vite for fast development
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
            Tailwind CSS for styling
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            React Router for navigation
          </li>
        </ul>
      </main>
    </div>
  )
}

export default About