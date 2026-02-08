import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProfileCard from './ProfileCard'
import { Heart, X } from 'lucide-react'
import { getProfiles, postSwipe } from '../api/client'

const SwipeDeck = () => {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [fetchingMore, setFetchingMore] = useState(false)

    const fetchMoreProfiles = async () => {
        if (fetchingMore) return
        setFetchingMore(true)
        const newProfiles = await getProfiles(10) // Fetch larger batches
        setProfiles(prev => [...prev, ...newProfiles])
        setFetchingMore(false)
        setLoading(false)
    }

    useEffect(() => {
        fetchMoreProfiles()
    }, [])

    const handleDragEnd = (event, info, id) => {
        const threshold = 80 // Reduced for easier mobile swiping
        const velocityThreshold = 200 // Add velocity check for quick flicks

        if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
            handleSwipe("right", id)
        } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
            handleSwipe("left", id)
        }
    }

    const handleSwipe = (direction, id) => {
        console.log(`Swiped ${direction} on ${id}`)

        setProfiles((current) => {
            const updated = current.filter(p => p.id !== id)
            // Trigger fetch if we're running low (less than 5 cards)
            if (updated.length < 5) {
                fetchMoreProfiles()
            }
            return updated
        })

        // Fire and forget API call
        postSwipe(id, direction)
    }

    if (loading && profiles.length === 0) {
        return (
            <div className="no-more-profiles">
                <h2>Loading Brodys...</h2>
                <div role="status">Loading...</div>
            </div>
        )
    }

    if (profiles.length === 0 && !loading) {
        return (
            <div className="no-more-profiles">
                {/* This should rarely happen now */}
                <h2>Finding more Brodys...</h2>
            </div>
        )
    }

    return (
        <div className="swipe-deck-container">
            <div className="card-stack">
                <AnimatePresence>
                    {profiles.map((profile, index) => {
                        // Only show top 2 cards for performance/visuals
                        if (index > 1) return null;
                        const isTop = index === 0;

                        return (
                            <ProfileCard
                                key={profile.id}
                                profile={profile}
                                dragHandler={isTop ? (e, i) => handleDragEnd(e, i, profile.id) : undefined}
                                style={{
                                    zIndex: profiles.length - index,
                                    position: 'absolute',
                                    top: index * 10, // Stack effect
                                    scale: 1 - index * 0.05
                                }}
                            />
                        )
                    })}
                </AnimatePresence>
            </div>

            <div className="controls">
                <button onClick={() => handleSwipe("left", profiles[0].id)} className="control-btn pass">
                    <X size={32} />
                </button>
                <button onClick={() => handleSwipe("right", profiles[0].id)} className="control-btn like">
                    <Heart size={32} fill="white" />
                </button>


            </div>

            <div className="socials">
                <a href="https://www.instagram.com/_brody.h/" target="_blank" rel="noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                        alt="Instagram"
                        style={{ width: '60px', height: '60px' }}
                    />
                </a>
                <span classname="social-label">_brody.h</span>
            </div>

        </div>
    )
}

export default SwipeDeck
