# Use Alpine as the base image
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build TypeScript
RUN npm run build

EXPOSE 3000

# Start the server
CMD ["node", "dist/server.js"]
