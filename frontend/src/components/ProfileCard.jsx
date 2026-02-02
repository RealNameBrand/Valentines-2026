import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const ProfileCard = ({ profile, dragHandler, style }) => {
    // Motion value for drag position (independent tracking for stamps)
    const x = useMotionValue(0)

    // Transform x drag value to opacity for hints
    const likeOpacity = useTransform(x, [20, 100], [0, 1])
    const nopeOpacity = useTransform(x, [-20, -100], [0, 1])

    // Rotate slightly based on drag
    const rotate = useTransform(x, [-200, 200], [-10, 10])

    return (
        <motion.div
            className="profile-card"
            drag={dragHandler ? "x" : false}
            dragSnapToOrigin={true}
            dragElastic={0.6}
            onDragEnd={dragHandler}
            style={{ ...style, x, rotate }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.2 } }}
            whileDrag={{ cursor: "grabbing" }}
        >
            {/* Gesture Hints / Stamps */}
            <motion.div className="stamp like-stamp" style={{ opacity: likeOpacity }}>
                LIKE
            </motion.div>
            <motion.div className="stamp nope-stamp" style={{ opacity: nopeOpacity }}>
                NOPE
            </motion.div>

            {/* Background Image (4:3 Aspect Ratio simulated via container) */}
            <div className="card-image-background">
                {profile.imageUrl ? (
                    <img
                        src={profile.imageUrl}
                        alt={profile.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <div className="image-placeholder-full">
                        {profile.name ? profile.name[0] : 'B'}
                    </div>
                )}
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="card-overlay" />

            {/* Foreground Content */}
            <div className="card-content-overlay">
                <div className="header-row">
                    <h2>{profile.name || "Brody"}, 24</h2>
                </div>

                <div className="tags">
                    {profile.likes && profile.likes.map((like, i) => (
                        <span key={i} className="tag like">❤ {like}</span>
                    ))}
                    {profile.dislikes && profile.dislikes.map((dislike, i) => (
                        <span key={i} className="tag dislike">✖ {dislike}</span>
                    ))}
                </div>

                <p className="bio">{profile.about_me}</p>
            </div>
        </motion.div>
    )
}

export default ProfileCard
