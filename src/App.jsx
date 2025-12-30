import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const navigateToLogin = () => setCurrentView('login');
  const navigateToHome = () => setCurrentView('landing');

  if (currentView === 'login') {
    return (
      <div className="app">
        <Login />
        <button
          onClick={navigateToHome}
          style={{ position: 'absolute', top: '24px', left: '24px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-secondary)' }}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Header onLoginClick={navigateToLogin} />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </div>
  )
}

export default App
