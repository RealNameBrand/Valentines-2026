#  Brody's Valentines go big or go home (and by home I mean kms)

## 2026 Valentines website

### why?
this is the 3rd year of making stupid valentine cards for church
and I'd thought it would be funny to make a fake dating site with just me.
the "profile" about me are bogus personality/ red flags


#### Links
- [valentines.brodyfan.club](valentines.brodyfan.club)
- [image bucket](https://drive.google.com/drive/folders/1oDErCcfHHbMZR7o037Fniebyg04nNAXY?usp=sharing)


### about me example

```
I know my worth
about me: 
Cant keep a hamster alive for more than a week
    
Likes:
puting fingerprints on glass
    
Dislikes:
sharp glass

habits:

Current Goals:
    Trying to get banned from every local Jollibee
Notable Achievements:
Once ate a whole rotisserie chicken in a parked Honda Civic.
```


## JSON format
  something like this
```json
"imageUrl": "drive.google.com"
"likes": ["puting fingerprints on glass"],
"dislikes": ["sharp glass"],
"about_me": [
    "Cant keep a hamster alive for more than a week",
    "Likes putting fingerprints on glass / Dislikes glass",
    "Fired from a library for too much shushing",
    "I think the moon is just the back of the sun"
  ],

```

## EndPoint
```
This gets 10 profiles for the user
valentines.brodyfan.club/v1/getProfiles?amount=10

This if we want to send the metrics if they swiped left or right
valentines.brodyfan.club/v1/postSwipe
```

### cupidDB structure

```
.
├── photoUrls
└── bios/
    ├── type  <- type of string if its a "like","dislike",or "aboutme"
    └── string <- contains the text to display
```

Also All photos will be 4:3 as terry intended





