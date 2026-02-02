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
        </div>
    )
}

export default App
