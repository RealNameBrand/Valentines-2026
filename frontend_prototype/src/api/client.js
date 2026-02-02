import { generateBatch } from '../generators/brodyGenerator'

// We no longer need a base URL since we are generating locally
// const BASE_URL = 'http://localhost:5000/v1' 

export const getProfiles = async (amount = 10) => {
    // No delay needed for local generation - instant gratification!
    return generateBatch(amount)
}

export const postSwipe = async (profileId, direction) => {
    // Just log it
    console.log(`[Backend Simulation] User swiped ${direction} on ${profileId}`)
    return Promise.resolve({ success: true })
}
