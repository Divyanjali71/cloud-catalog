Enterprise Cloud Service Catalog

A Node.js and Express web application providing an Enterprise Cloud Service Catalog with two API endpoints.

## Features

- Customized HTML landing page
- Cloud services API
- System health status API
- Local deployment on port 8080
- Vercel cloud deployment

## APIs

- `/api/services` – Returns cloud services in JSON format.
- `/api/status` – Returns application health and developer information.

## Port 8080: Local vs Production (Vercel)

Locally, the application uses port 8080 as its default port through `process.env.PORT || 8080`. This allows developers to access the application through `http://localhost:8080` when no environment port is provided. In production, Vercel manages application execution through its serverless infrastructure. The platform handles incoming HTTP requests and invokes the exported Express application without requiring a manually opened listening port. Environment variables may provide port configuration in port-based hosting environments. This approach supports local development and cloud deployment while keeping the same application code and API routes.

## Technologies

- Node.js
- Express.js
- HTML
- CSS
- Vercel
- GitHub

