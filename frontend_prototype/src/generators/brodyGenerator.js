// The "Gene Pool" - Expanded for Infinite Variety
const ADJECTIVES = [
    "Feral", "Sleepy", "Suspiciously Wealthy", "Unhinged", "Romantically Available",
    "Caffeinated", "Lost", "Existential", "Chaotic", "Domesticated", "Unemployed", "Flight Risk",
    "Slightly Damp", "Highly Flammable", "Glow-in-the-dark", "Biodegradable", "Haunted", "Pixelated",
    "Upside-down", "Not A Fed", "Three Raccoons In A Trenchcoat", "Sentient", "Spicy",
    "Crunchy", "High-Definition", "Low-Poly", "Gluten-Free", "Free-Range",
    "Solar-Powered", "Rechargeable", "Vintage", "Limited Edition", "Refurbished", "cursed",
    "Slightly dented", "Top-shelf", "Generic Brand", "Discount", "Single-use", "Recyclable",
    "Instructional", "Abstract", "Geometrically Impossible", "Time-traveling", "Interdimensional",
    "Cryptographically Secure", "Non-Fungible", "Open Source", "Beta Testing", "Early Access",
    "Shiny", "Priest", "Bot", "Alien", "Nerd", "Meme Coin Enthusiast", "V-tuber", "Silly", "Dsylexic",
    "Cringe", "日本語", "AI", "Tech Bro", "Monk", "DJ", "Silly Goose", "Extreme Couponer", "Dripped-out",
    "Swagger", "Balling", "Balding", "Hacker", "Big Brain", "Golf", "Fisher", "Conductor", "New yorker", "David",
    "non-euclidean", "Cyber", "Friendly Neighbourhood", "Buying GF", "Adrien", "Project Manager",
    "Girl Boss", "Loan Shark", "Cyborg", "uɐᴉlɐɹʇsnɐ", "����", "3D Printed", "Cyber", "Glowing",
    "Schizophrenic", "Cowboy", "Overclocked", "Main Character", "Side Quest Enthusiast", "Vaguely Threatening", "Under-seasoned",
    "Heavily Modded", "Discontinued", "As Seen On TV", "End-of-Life", "High-Maintenance", "Standard Issue", "Deep-Fried", "Carbon Neutral", "Factory Sealed",
    "Legally Distinct","Final Sale", "As-Is",

]

const JOBS = [
    "Professional Napper", "Honda Civic Pilot", "Spirit Halloween Manager", "Stay-at-home Son",
    "Hamster Whisperer", "Costco Sample Critic", "Aspiring Soundcloud Rapper", "Cryptid Hunter",
    "Professional Yapper", "Local Menace", "Full-time Gamer", "Discord Moderator", "Meme Historian",
    "Avocado Toast Connoisseur", "Professional Line Waiter", "Ghost Hunter (Unsuccessful)",
    "CEO of Napping", "Dog Petting Specialist", "Air Guitar World Champion", "Time Traveler (Intern)",
    "Chief Vibe Officer", "Certified Forklift Operator", "Professional Apologizer", "Recovering iPad Kid",
    "Fortune Cookie Writer", "Subway Surfer Pro", "Minecraft Architect", "Professional Third Wheel",
    "Ex-Child Star (Local Commercial)", "Neighborhood Watch Captain", "Amateur Detective",
    "Professional Panic Buyer", "Cloud Yeller", "Sidewalk Inspector", "Cat Lawyer",
    "Influencer (12 followers)", "Crypto Loser", "Professional Risky Texter", "Labubu quality control tester",
    "X (formerly know as Twitter) fact-checker", "Professional Mine Sweeper", "Uber Driver", "league of legends pro",
    "Gender Revealer", "Time-traveller", "Sock Knitter", "The Button Factory", "Lemonade stand 2",
    "Customer Service Representative", "Spam Caller", "Bass Pro Shops Manager", "Dog Whisperer",
    "Newest Shark on Shark Tank", "Make-up Tester", "Professional Waifu",
    "Currently working at ██████████ within the ██████ division", "Crocodile Hunter", "Marine Biologist",
    "Bull Runner", "Manager at Weenie Hut Jr's", "Fry Cook", "Unlicensed Pharmacist", "Wikipedia Editor", "Professional Bridge Burner", 
    "Former High School Legend", "The Person Who Puts The Stickers On Apples"
]

const BIO_SNIPPETS = [
    "Can't keep a hamster alive for more than a week.",
    "I think the moon is just the back of the sun.",
    "Banned from 3 different libraries.",
    "Looking for someone to help me commit tax fraud (socially).",
    "Once ate a whole rotisserie chicken in a parked Honda Civic.",
    "My love language is silence.",
    "I know my worth (it's $12.50).",
    "Looking for a passenger princess for my 2004 Civic.",
    "My red flag is that I don't believe in red flags.",
    "5'11\" (6'0\" in Timberlands).",
    "I hold the world record for most hours slept in a single day.",
    "I'm not like other guys, I'm worse.",
    "Will trade my soul for a McFlurry.",
    "Swipe right if you want to see my rock collection.",
    "I'm just here for the free food.",
    "Looking for a partner in crime (please help me rob a bank).",
    "I'm actually three owls in a highly realistic human suit.",
    "My therapist says I'm a 'challenge'.",
    "I have 47 unread texts and I'm not going to answer them.",
    "Fluent in yapping.",
    "Fired from a library for too much shushing.",
    "Also asks “How’s Waldo?”",
    "My spirit animal is a bag of flour.",
    "I still pack my own lunchables.",
    "Seeking someone to reach the top shelf.",
    "I only date people who can beat me in Mario Kart (everyone).",
    "I am the reason there are instructions on shampoo bottles.",
    "Once got lost in an IKEA for 3 days.",
    "Looking for a designated spider killer.",
    "My mom thinks I'm cool.",
    "I laugh at my own jokes so you don't have to.",
    "Part-time model (foot modeling counts right?).",
    "I had no female friends but I like the idea of them",
    "Star Wars is my Bible.",
    "★", "I pledge allegiance to the swag", "Please have a seat, but don't sit down.", "Lawn mower enthusiast",
    "My John Deere is dear to me.", "I order all of my sandwiches with mayonnaise.",
    "Trend starter.", "99 Woodcutting.", "Sometimes I get my fingers caught in my shoe laces.",
    "I still don't know Victoria's secret.", "Please.", "🙏", "Currently studying for the prostate exam.",
    "I like to run out my door with toast in my mouth.", "Three time winner of the Tic-tac-toe world championship.",
    "President of the Brody Fan Club.", "I will be bald by the age of 35.", "I win at monopoly.",
    "Power Line enthusiast.", "Only a picture could frame me for my good looks.",
    "100% fail rate for Joe mama joke.", "Still use my fingers to count.", "Cried when watching Hot Frosty.",
    "I'm the one who is one caller ahead of you.", "I am just a fish.", "I've had the same email since Gr.5.",
    "My mom's opinion is all that matters.", "You look exactly like my first wife.",
    "Whats the difference between gas and diesel?", "I am not in the files",
    "I leave the cookie in the milk until the bubbles stop.", "Genuine Fairy",
    "Even the milk has a date for the 14th.", "Yappaholic.",
    "Friday nights are for my WWII model collection.", "Stepping on Lego to feel something again.",
    "You'll find me walking my pitbull without a leash everyday.", "If it came down to it I would do CPR.",
    "My diet consists entirely of things I found in the air fryer.",
    "I once got into a fight with a self-checkout machine and lost.",
    "My hobbies include staring at the wall and losing my keys.",
    "My credit score is a surprise even to me.",
    "I’m only here because my court-appointed therapist suggested it.",
    "I once apologized to a mannequin for bumping into it.",
]

const LIKES = [
    "Concrete", "The smell of rain", "Fingerprints on glass", "Chaos", "Microwaved water",
    "Arguments", "Jollibee", "My Mom", "Silence", "Elevator Music", "Mildew", "Tax Evasion",
    "Arson (allegedly)", "Buying things I don't need", "Canceling plans", "Sleeping in jeans",
    "Drinking pickle juice", "Watching paint dry", "Arguing with strangers on the internet",
    "Stealing pens", "Clicking tongs twice", "Putting the milk in before the cereal",
    "Leaving on read", "Talking during movies", "Socks with sandals", "Stand-up comedy",
    "Feminist literature", "Sitting", "Breathing", "Not thinking", "Existential dread",
    "Free samples", "WiFi passwords", "Deadlines", "Procrastination", "Late night water",
    "Cold pillows", "Instructions", "Blue screens", "Loading bars", "Plastic plants",
    "puting fingerprints on glass", "Stand-up comedy", "Feminist literature ", "Star Wars",
    "Reading your lips", "Fortnite", "Rune gold-trimmed set (lg)", "RuneScape",
    "Bacon", "Eating sand", "Donuts", "Orange", "Hannah Montana", "Classical music", "Talus Dome",
    "Your dad's music", "Your number", "Looking mysterious", "Ice cream", "Fishing", "Fish",
    "Redstone", "De-centralized data storage", "Cows", "Heart Passion", "Clubbing", "Swimming", "Movies",
    "Cuddles", "Low balling on marketplace", "Space", "Oxygen","Unlabeled buttons","Public transport naps",
]

const DISLIKES = [
    "Authority", "Vegetables", "Paying rent", "The DMV", "Loud noises",
    "People who walk slow", "Expiration dates", "Constructive criticism", "Sobriety", "Laws",
    "Morning people", "Decaf coffee", "Small talk", "Texting back", "Matching socks",
    "The sun", "Healthy coping mechanisms", "Being perceived", "Cardio", "Thinking about the future",
    "Alarms", "Bright lights", "Social interaction", "Doing laundry", "My own consequences",
    "Sharp glass", "Buttering waffles", "Sit-down dinners", "Running", "Feeling things",
    "Eye contact", "Phone calls", "Voicemail", "Unskippable ads", "Buffering", "Papercuts",
    "Wet socks", "Mosquitoes", "Spoilers", "Traffic", "Crowds", "Reality",
    "sharp glass", "Buttering waffles", "Sit-down dinners",
    "Creepers", "Gluing my fingers together", "Elderly",
    "Handshakes", "Green", "Miley Cyrus", "Sports ball", "5G", "Brussels sprouts", "TikTok", "Not fishing",
    "Bluestone", "IEEE standards", "Protocol 7", "First in food line ", "Drowning", "Loud noises",
    "Charlie Sheen", "Cloud storage", "Carbon dioxide", "The 'typing...' bubble that disappears", "Chewing on aluminum foil",
]

// Automatically import all images from the assets folder
// This requires moving images to src/assets/brody_photos
const imageModules = import.meta.glob('../assets/brody_photos/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' })
const IMAGE_URLS = Object.values(imageModules)

// Helper: Pick a random element and REMOVE it from the array (mutates array)
// Automatically refills from source if empty
// const popRandomElement = (pool, source) => {
//     if (pool.length === 0) {
//         // Refill if empty
//         pool.push(...source)
//     }
//     const index = Math.floor(Math.random() * pool.length)
//     return pool.splice(index, 1)[0]
// }


const popRandomElement = (pool, source) => {
    if (pool.length === 0) {
        pool.push(...source);
        shuffleArray(pool); // <-- Shuffle the new deck immediately
    }
    // pop() the last item for better performance, but splice(index) works too!
    const index = Math.floor(Math.random() * pool.length);
    return pool.splice(index, 1)[0];
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const popItemsUnderCharacterLimit = (pool, source, charLimit, minItems = 1) => {
    let selected = []
    let currentChars = 0
    let attempts = 0
    const MAX_ATTEMPTS = 50

    while (selected.length < minItems || (currentChars < charLimit && attempts < MAX_ATTEMPTS)) {
        attempts++

        if (pool.length === 0) {
            pool.push(...source)
        }
        const candidateIndex = Math.floor(Math.random() * pool.length)
        const candidate = pool[candidateIndex]

        if (selected.length < minItems) {
            pool.splice(candidateIndex, 1)
            selected.push(candidate)
            currentChars += candidate.length
        } else if (currentChars + candidate.length <= charLimit) {
            pool.splice(candidateIndex, 1)
            selected.push(candidate)
            currentChars += candidate.length
        } else {
            if (attempts > minItems + 5) break;
        }
    }
    return selected
}

const generateName = (pool, source) => {
    // 30% chance of just "Brody"
    if (Math.random() < 0.3) return "Brody"
    return `${popRandomElement(pool, source)} Brody`
}

export const generateProfile = () => {
    const tempPools = {
        adjectives: [...ADJECTIVES],
        jobs: [...JOBS],
        bios: [...BIO_SNIPPETS],
        likes: [...LIKES],
        dislikes: [...DISLIKES],
        images: [...IMAGE_URLS]
    }
    return generateUniqueProfile(tempPools)
}

const generateUniqueProfile = (pools) => {
    const id = Math.floor(Math.random() * 1000000000)

    return {
        id: id,
        name: generateName(pools.adjectives, ADJECTIVES),
        age: Math.floor(Math.random() * (35 - 19) + 19),
        imageUrl: popRandomElement(pools.images, IMAGE_URLS),

        about_me: `${popRandomElement(pools.jobs, JOBS)}. ${popRandomElement(pools.bios, BIO_SNIPPETS)}`,
        likes: popItemsUnderCharacterLimit(pools.likes, LIKES, 25, 1),
        dislikes: popItemsUnderCharacterLimit(pools.dislikes, DISLIKES, 20, 1)
    }
}


export const generateBatch = (amount = 10) => {
    const pools = {
        adjectives: [...ADJECTIVES],
        jobs: [...JOBS],
        bios: [...BIO_SNIPPETS],
        likes: [...LIKES],
        dislikes: [...DISLIKES],
        images: [...IMAGE_URLS]
    }

    return Array.from({ length: amount }, () => generateUniqueProfile(pools))
}
