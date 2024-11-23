# docker_project
Docker porject for HYO part 12

*** Project ***

This project is for HYO fullstack course part 12 exercises 21 and 22. It uses a previous project from the course as its base.

Backend functionality confirmed with postman before starting.

Frontend functionally confirmed with localhost.

*** Assignments ***

12.21   - Container has images running inside. CRUD works.
12.22   - Container has debug-, proxy-, backend- ja frontend-containers running inside it. CRUD works.

*** Docker run commands for DEVELOPMENT: ***

Frontend and backend images:

1. docker build -f ./dev.Dockerfile -t image-backend-development-oma .
2. docker build -f ./dev.Dockerfile -t image-frontend-development-oma .

Container:

1. docker compose -f docker-compose.dev.yml up

Address:

localhost:5173

*** Docker run commands for PRODUCTION: ***

Frontend and backend images:

1. docker build -t image-backend-production .
2. docker build -t image-frontend-production .

Container:

1. docker compose -f docker-compose.yml up

Address:

localhots:8080/

*** Local run commands ***

backend development:    npm run dev
backend production:     npm run start
backend build:          npm run build:ui

frontend development:   npm run dev
frontend production:    npm run start
frontend build:         npm run build:ui
