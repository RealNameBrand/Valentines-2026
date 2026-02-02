# Backend Specification for Valentines Frontend

This document outlines the API endpoints and JSON structure required by the React frontend.

## Base URL
The frontend is configured to proxy requests or hit: `http://localhost:5000` (or whatever your .NET app runs on).

## Endpoints

### 1. Get Profiles
**Request**: `GET /v1/getProfiles?amount=10`
**Response**: Array of `Profile` objects.

#### JSON Structure
```json
[
  {
    "id": 1,
    "name": "Brody",
    "age": 24, 
    "imageUrl": "https://example.com/brody_pic.jpg", 
    "about_me": "Cant keep a hamster alive for more than a week",
    "likes": [
        "puting fingerprints on glass", 
        "Cows"
    ],
    "dislikes": [
        "sharp glass",
        "Taxes"
    ]
  }
]
```

**Notes for Backend Dev:**
*   **`imageUrl`**: (Optional but recommended) Should be a direct link to a hosted image. If null/missing, the frontend will show a colored placeholder with the first initial.
*   **`id`**: Must be unique for the swipe logic to work.
*   **`likes` / `dislikes`**: Arrays of strings. Frontend handles the styling (Green for likes, Red for dislikes).
*   **`age`**: (Optional) Defaults to 24 if missing (hardcoded for now but flexible).

---

### 2. Submit Swipe
**Request**: `POST /v1/postSwipe`
**Description**: Fire-and-forget endpoint. The frontend does **not** wait for this to succeed before showing the next card to ensure smoothness.

#### Payload
```json
{
  "profileId": 1,
  "swipe": "right" 
}
```
*   `swipe`: Will be either `"left"` (Pass) or `"right"` (Like).

## CORS Policy
Since the frontend runs on `localhost:5173` (or inside Docker), ensure your .NET app allows CORS from:
*   `http://localhost:5173`
*   `http://127.0.0.1:5173`
