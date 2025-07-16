import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   return(
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    {/* Header */}
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">Gooziri</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Watch Demo</a>
      </nav>
      
      <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
        Sign in
        <ChevronDown size={16} />
      </button>
    </header>

    {/* Main Content */}
    <main className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to<br />
            Gooziri,<br />
            <span className="relative">
              Where Data<br />
              Meets Purpose.
              <div className="absolute -top-4 -right-8 text-blue-400">
                <svg width="40" height="40" viewBox="0 0 40 40" className="animate-pulse">
                  <path d="M20 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" fill="currentColor" />
                </svg>
              </div>
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            From Finance to Resource Management, every team gets a tailored view of what matters. Whether you're leading a project or managing people, Gooziri gives you real-time clarity, intelligent dashboards, and seamless collaboration all in one place.
          </p>
        </div>
        
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
          Get Started
        </button>
      </div>

      {/* Right Side - 3D Illustration */}
      <div className="lg:w-1/2 relative mt-12 lg:mt-0">
        <div className="relative flex justify-center">
          <img/>
    </main>
  </div>
  </div>
  );
  
}

export default App

