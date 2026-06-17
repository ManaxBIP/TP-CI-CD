# Stage 1: Build & Install Dependencies
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy package.json and install all dependencies (including devDependencies if any)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Stage 2: Production runner
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

# Set production environment
ENV NODE_ENV=production
ENV PORT=5000

# Copy package.json to runner
COPY package*.json ./

# Install only production dependencies (clean install)
RUN npm ci --only=production

# Copy source files from builder stage
COPY --from=builder /usr/src/app/src ./src

# Use non-root node user for security
USER node

# Expose port
EXPOSE 5000

# Start command
CMD ["npm", "start"]
