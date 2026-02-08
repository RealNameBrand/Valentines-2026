import React, { useState } from 'react'
import Home from './components/Home'
import SwipeDeck from './components/SwipeDeck'
import instaIcon from './assets/InstagramIcon.png' // Import your image here
import './styles/global.css'

function App() {
    const [started, setStarted] = useState(false)

    return (
        <div className="app-container">
            {/* Main Content */}
            <main>
                {!started ? (
                    <Home onStart={() => setStarted(true)} />
                ) : (
                    <SwipeDeck />
                )}
            </main>

            {/* Social Links Footer */}
            <footer className="social-footer">
                <a href="https://www.instagram.com/_brody.h/" target="_blank" rel="noreferrer">
                    <img
                        src={instaIcon}
                         alt="Instagram"
                        style={{ width: '30px', height: '30px' }}
                    />
                </a>
            </footer>
        </div>
    )
}

export default App
