import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="bg-gray-800 text-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Hello Home</h1>
        <p className="text-xl text-gray-300 mb-6">Welcome to your React application with Tailwind CSS!</p>
        <p className="text-gray-400 mb-6">This is the Home page</p>
        <Link 
          to="/page1" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Go to Page1
        </Link>
      </main>
    </div>
  )
}

export default Home