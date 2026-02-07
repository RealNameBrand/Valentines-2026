import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Home = ({ onStart }) => {
    return (
        <div className="home-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hero-content"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="floating-heart"
                >
                    <Heart size={80} fill="#ff4d6d" color="#ff4d6d" />
                </motion.div>

                <h1 className="title">2026 Valentines</h1>
                <p className="subtitle">Find the Brody that's right for you!</p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="start-button"
                    onClick={onStart}
                >
                    Find your Brody Today!
                </motion.button>
            </motion.div>

            <div className="background-hearts">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-heart"
                        style={{
                            left: `${Math.random() * 100}vw`,
                            top: `${Math.random() * 100}vh`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    >
                        ❤
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
