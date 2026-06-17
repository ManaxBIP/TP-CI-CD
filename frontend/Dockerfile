# Stage 1: Build the static application
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Run Vite build to generate static bundle in /dist
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:1.25-alpine AS runner

# Remove default nginx configurations
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration with API proxy support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files from builder stage to the default Nginx folder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
