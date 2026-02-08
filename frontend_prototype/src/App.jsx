import React, { useState } from 'react'
import Home from './components/Home'
import SwipeDeck from './components/SwipeDeck'
import './styles/global.css'

function App() {
    const [started, setStarted] = useState(false)

    return (
        <div className="app-container">
            {!started ? (
                <Home onStart={() => setStarted(true)} />
            ) : (
                <SwipeDeck />
            )}

            
            <footer className="social-footer">
                <a href="https://www.instagram.com/_brody.h/" target="_blank" rel="noreferrer">
                    <img
                        src='./assets/instagram-logo.png'
                        alt="Instagram"
                        style={{ width: '30px', height: '30px' }}
                    />
                </a>
            </footer>
        </div>
    )
}

export default App
