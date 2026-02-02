import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProfileCard from './ProfileCard'
import { Heart, X } from 'lucide-react'
import { getProfiles, postSwipe } from '../api/client'

const SwipeDeck = () => {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [removedProfiles, setRemovedProfiles] = useState([])

    useEffect(() => {
        const loadProfiles = async () => {
            const data = await getProfiles(5)
            setProfiles(data)
            setLoading(false)
        }
        loadProfiles()
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
        setProfiles((current) => current.filter(p => p.id !== id))
        setRemovedProfiles([...removedProfiles, id])

        // Fire and forget API call, backend might be down but client handles it
        postSwipe(id, direction)
    }

    if (loading) {
        return (
            <div className="no-more-profiles">
                <h2>Loading Brodys...</h2>
                <div role="status">Loading...</div>
            </div>
        )
    }

    if (profiles.length === 0) {
        return (
            <div className="no-more-profiles">
                <h2>No more Brodys!</h2>
                <p>You've swiped them all.</p>
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
        </div>
    )
}

export default SwipeDeck
