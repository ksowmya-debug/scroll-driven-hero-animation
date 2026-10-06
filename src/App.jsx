import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-gray-100 font-sans overflow-x-hidden">
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
