import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Main content goes here */}
      </div>
      <Footer />
    </>
  )
}

export default App