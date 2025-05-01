# Step 1: Use a Node.js base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the React app
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the built frontend
FROM nginx:alpine

# Copy the built frontend files to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for access
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
