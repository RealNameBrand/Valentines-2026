const BASE_URL = 'http://localhost:5000/v1' // Assuming backend runs on 5000

// Mock Data incase backend is down
const MOCK_PROFILES = [
    {
        id: 1,
        name: "Brody",
        about_me: "Cant keep a hamster alive for more than a week",
        likes: ["puting fingerprints on glass"],
        dislikes: ["sharp glass"]
    },
    {
        id: 2,
        name: "Brody (Gym)",
        about_me: "I think the moon is just the back of the sun",
        likes: ["Conspiracy Theories"],
        dislikes: ["NASA"]
    },
    {
        id: 3,
        name: "Brody (Chef)",
        about_me: "Once ate a whole rotisserie chicken in a parked Honda Civic.",
        likes: ["Protein"],
        dislikes: ["Vegetables"]
    }
]

export const getProfiles = async (amount = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/getProfiles?amount=${amount}`)
        if (!response.ok) throw new Error('API Failed')
        return await response.json()
    } catch (error) {
        console.warn('Backend unavailable, using mock data:', error)
        // Return mock data with a slight delay to simulate network
        return new Promise(resolve => {
            setTimeout(() => resolve(MOCK_PROFILES), 500)
        })
    }
}

export const postSwipe = async (profileId, direction) => {
    try {
        const response = await fetch(`${BASE_URL}/postSwipe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                profileId,
                swipe: direction // 'left' or 'right'
            })
        })
        return await response.json()
    } catch (error) {
        console.warn('Backend unavailable, swipe not saved:', error)
        return { success: false }
    }
}
