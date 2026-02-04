.PHONY: install dev dev-strapi dev-frontend build build-strapi build-frontend seed clean

# Install all dependencies
install:
	cd strapi && npm install
	cd frontend && npm install

# Development - start Strapi (use 'make dev-frontend' in another terminal for the site)
dev: dev-strapi

# Start Strapi in development mode (localhost:1337)
dev-strapi:
	cd strapi && npm run develop

# Start frontend in development mode (localhost:3000)
dev-frontend:
	cd frontend && npm run dev

# Build all
build: build-strapi build-frontend

build-strapi:
	cd strapi && npm run build

build-frontend:
	cd frontend && npm run build

# Seed Strapi with example data
seed:
	cd strapi && npm run seed:example

# Deploy frontend to Netlify
deploy:
	cd frontend && npm run build && netlify deploy --dir=out --prod

# Clean build artifacts and dependencies
clean:
	rm -rf strapi/node_modules strapi/.strapi strapi/.tmp strapi/dist
	rm -rf frontend/node_modules frontend/.next frontend/out
