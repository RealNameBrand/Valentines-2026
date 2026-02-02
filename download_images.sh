#!/bin/bash
mkdir -p frontend_prototype/src/assets/brody_photos
echo "Downloading images..."
for i in {1..50}; do
   curl -L "https://loremflickr.com/600/800/man?random=$i" -o "frontend_prototype/src/assets/brody_photos/brody_random_$i.jpg" --silent
   echo "Downloaded brody_random_$i.jpg"
   sleep 0.5
done
echo "Download complete!"
