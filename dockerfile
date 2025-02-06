# Use the official Cypress base image
FROM cypress/included:12.8.1

# Set the working directory in the container
WORKDIR /app

# Set default environment variables (can be overridden)
ARG ENV=production
ARG VIEWPORT=iphone_xr

# Set environment variables inside the container
ENV CYPRESS_ENV=$ENV
ENV CYPRESS_VIEWPORT=$VIEWPORT

# Install dependencies (if you have a package.json)
COPY package.json package-lock.json ./

RUN npm ci

# Copy your tests into the container (adjust the path if needed)
COPY . .

# Set the command to run Cypress tests
CMD ["sh", "-c", "npx cypress run --env env=$CYPRESS_ENV,viewport=$CYPRESS_VIEWPORT"]
