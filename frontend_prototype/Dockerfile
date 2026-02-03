FROM node:20-alpine

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev"]
