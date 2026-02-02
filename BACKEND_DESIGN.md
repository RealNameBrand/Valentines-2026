# Backend Design: The "Infinite Brody" Engine

To keep the site fresh without manually writing hundreds of profiles, the backend should act as a **Procedural Content Generator** rather than a static database reader.

## 1. The Core Concept
The backend will not store "Profiles". It will store **Traits**.
Every time `/getProfiles` is called, the backend assembles new "Brodys" like Lego pieces.

## 2. Data Structure (The "Gene Pool")
The backend implementation (C#/.NET) should have lists of strings loaded from a JSON or hardcoded:

```json
{
  "adjectives": ["Feral", "Sleepy", "Suspiciously Wealthy", "Unhinged", "Romantically Available"],
  "jobs": ["Professional Napper", "Honda Civic Pilot", "Spirit Halloween Manager", "Stay-at-home Son"],
  "bios": [
      "Can't keep a hamster alive for more than a week.",
      "I think the moon is just the back of the sun.",
      "Banned from 3 different libraries.",
      "Looking for someone to help me commit tax fraud (socially)."
  ],
  "likes": ["Concrete", "The smell of rain", "Fingerprints on glass", "Chaos"],
  "dislikes": ["Authority", "Vegetables", " Paying rent", "The DMV"]
}
```

## 3. The Algorithm (C# Logic)

When `GET /v1/getProfiles?amount=10` hits:

1.  **Loop** 10 times.
2.  **Generate Name**:
    *   30% chance: Just "Brody"
    *   70% chance: `Random(adjectives) + " Brody"` (e.g. "Unhinged Brody")
3.  **Generate Age**: `Random(19, 35)`
4.  **Compose Bio**:
    *   Pick 1 random `job`.
    *   Pick 1 random `bio` snippet.
    *   Result: *"Stay-at-home Son. Banned from 3 different libraries."*
5.  **Traits**:
    *   Pick 3 random unique `likes`.
    *   Pick 2 random unique `dislikes`.
6.  **Image Selection**:
    *   Select a random image URL from the list of ~40 Drive photos.
    *   *Tip*: Ensure you don't pick the same image twice in one batch of 10.

## 4. Image Handling Strategy
Since we cannot generate "Real Brody" faces with AI easily (without training a custom model), we stick to the **Curated Chaos** method.

1.  **Host the Drive Photos**: Download the photos from the Drive and host them in `wwwroot/images` (or S3/Blob Storage).
2.  **Serve**: The backend returns the URL `https://api.../images/brody_04.jpg`.
3.  **(Optional Fun)**: Use a library like **ImageSharp** to randomly flip, grayscale, or add a "stamps" watermark to the image on the fly before serving, making the limited set feel larger.

## 5. Persistence (The "Swipe" Logic)
Since the profiles are generated dynamically, they don't have permanent IDs.
*   **Problem**: If I swipe "Like" on "Feral Brody (ID: 101)", and ID 101 is generated differently next time, does it matter?
*   **Solution**: For a joke site, **State does not matter**.
    *   `/postSwipe` can essentially log "User liked a profile with traits: [Feral, Concrete]".
    *   We don't need to "match" them later. It's just for the dopamine hit of swiping.

## 6. (Bonus) AI Integration
If you *really* want to use LLMs:
*   Integrate **OpenAI API / Azure OpenAI**.
*   **Prompt**: *"Generate a funny, unhinged dating profile bio for a 24 year old man named Brody who loves Honda Civics. Max 20 words."*
*   **Cost**: This costs money per swipe. The **Combinatorial (Random List)** method above is free, faster (0ms latency), and often funnier because you control the jokes.
