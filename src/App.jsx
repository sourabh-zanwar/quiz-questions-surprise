import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz'
import MemoryTimeline from './components/MemoryTimeline'
import './App.css'

function App() {
  const [tab, setTab] = useState('quiz')

  // Support hash-based navigation for GH Pages (no router needed)
  useEffect(() => {
    const applyFromHash = () => {
      const h = window.location.hash.replace('#', '')
      if (h === 'timeline') setTab('timeline')
      else setTab('quiz')
    }
    applyFromHash()
    window.addEventListener('hashchange', applyFromHash)
    return () => window.removeEventListener('hashchange', applyFromHash)
  }, [])

  const go = (next) => {
    window.location.hash = next
    setTab(next)
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand" role="banner">
            <div className="mark" aria-hidden>❤</div>
            <div className="title">Our Journey</div>
          </div>
          <nav className="nav" aria-label="Primary">
            <button className={`tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => go('quiz')}>Quiz</button>
            <button className={`tab ${tab === 'timeline' ? 'active' : ''}`} onClick={() => go('timeline')}>Timeline</button>
          </nav>
        </div>
      </header>
      <main className="content">
        {tab === 'timeline' ? <MemoryTimeline /> : <Quiz />}
      </main>
    </div>
  )
}

export default App
