.PHONY: install dev dev-strapi dev-frontend build build-strapi build-frontend seed clean

# Install all dependencies
install:
	cd strapi && npm install
	@if [ -d "frontend" ]; then cd frontend && npm install; fi

# Development - start all services
dev: dev-strapi

# Start Strapi in development mode
dev-strapi:
	cd strapi && npm run develop

# Start frontend in development mode (once created)
dev-frontend:
	cd frontend && npm run dev

# Build all
build: build-strapi build-frontend

build-strapi:
	cd strapi && npm run build

build-frontend:
	@if [ -d "frontend" ]; then cd frontend && npm run build; fi

# Seed Strapi with example data
seed:
	cd strapi && npm run seed:example

# Clean build artifacts and dependencies
clean:
	rm -rf strapi/node_modules strapi/.strapi strapi/.tmp strapi/dist
	@if [ -d "frontend" ]; then rm -rf frontend/node_modules frontend/.next; fi
