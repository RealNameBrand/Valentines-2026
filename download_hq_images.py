import os
import requests
import hashlib
import time

TARGET_DIR = "frontend_prototype/src/assets/brody_photos"
TARGET_COUNT = 50
URL = "https://loremflickr.com/600/800/man,portrait/all"

if not os.path.exists(TARGET_DIR):
    os.makedirs(TARGET_DIR)

existing_hashes = set()
downloaded_count = 0

print(f"Starting smart download for {TARGET_COUNT} unique images...")

while downloaded_count < TARGET_COUNT:
    try:
        # Add random query param to bust potential caches
        response = requests.get(f"{URL}?random={time.time()}", timeout=10)
        
        if response.status_code == 200:
            content = response.content
            # Calculate fingerprint
            file_hash = hashlib.sha256(content).hexdigest()
            
            if file_hash in existing_hashes:
                print(f"Skipping duplicate (Hash: {file_hash[:8]}...)")
                continue
                
            # Unique! Save it
            filename = f"brody_hq_{downloaded_count + 1}.jpg"
            filepath = os.path.join(TARGET_DIR, filename)
            
            with open(filepath, "wb") as f:
                f.write(content)
                
            existing_hashes.add(file_hash)
            downloaded_count += 1
            print(f"[{downloaded_count}/{TARGET_COUNT}] Saved {filename}")
            
            # Be nice to the server
            time.sleep(0.5)
        else:
            print(f"Failed to fetch image: Status {response.status_code}")
            time.sleep(1)
            
    except Exception as e:
        print(f"Error: {e}")
        time.sleep(1)

print("Download complete!")
