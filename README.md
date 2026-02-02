# PrimeTrade AI - Frontend Developer Intern Assignment

This repository contains the solution for the Frontend Developer Intern shortlisting assignment from PrimeTrade AI. The project is a full-stack web application with a React frontend and a Node.js/Express backend.

## Tech Stack

**Frontend:**
- React.js (with Vite)
- TypeScript
- TailwindCSS
- React Router
- React Hook Form (for form validation)
- Zod (for schema validation)
- Axios

**Backend:**
- Node.js
- Express
- TypeScript
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm
- MongoDB

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4.  **Run the backend server:**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## How to Use

1.  Open your browser and navigate to `http://localhost:5173`.
2.  Create a new account using the signup page.
3.  Log in with your credentials.
4.  You will be redirected to the dashboard, where you can view your profile and manage your tasks.

## Postman Collection

A Postman collection for the backend API is available in the `postman` directory of this repository.

## Scalability for Production

To scale this application for production, I would consider the following:

- **Deployment:** Deploy the frontend to a static hosting service like Vercel or Netlify and the backend to a platform like Heroku, AWS, or a dedicated server.
- **CORS:** Configure Cross-Origin Resource Sharing (CORS) on the backend to allow requests only from the production frontend domain.
- **Environment Management:** Use separate environment files (`.env.production`, `.env.development`) to manage different configurations for each environment.
- **Database:** Use a managed MongoDB service like MongoDB Atlas for better scalability, backups, and monitoring. Implement database indexing to optimize query performance.
- **Caching:** Use a caching layer like Redis to cache frequently accessed data and reduce database load.
- **Load Balancing:** Use a load balancer to distribute traffic across multiple instances of the backend server to handle high traffic.
- **Security:** Implement additional security measures like rate limiting, input sanitization, and HTTPS.
- **Logging and Monitoring:** Use a logging service to monitor application performance and errors in real-time.
