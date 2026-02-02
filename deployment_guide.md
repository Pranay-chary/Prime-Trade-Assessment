# Deploying to Render.com

This guide will walk you through deploying your backend to Render.

## Prerequisites
1. **GitHub Repository**: You have already pushed your code to GitHub.
2. **Build Scripts**: I have updated your `backend/package.json` to include the necessary `build` and `start` scripts.
3. **Commit Changes**: Make sure to commit and push the changes I just made to `package.json` and the TypeScript fixes.

## Step 1: Create a Web Service on Render
1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Web Service**.
3. Choose **Build and deploy from a Git repository**.
4. Connect your GitHub account if you haven't already.
5. Select your repository: `Prime-Trade-Assessment`.

## Step 2: Configure the Service
Fill in the details as follows:

- **Name**: `primetrade-backend` (or any name you prefer)
- **Region**: Choose the one closest to you (e.g., Singapore, Frankfurt, Oregon).
- **Branch**: `main`
- **Root Directory**: `backend` (Important! This tells Render your app is in the backend folder)
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
    - *Note: This installs dependencies and compiles the TypeScript code.*
- **Start Command**: `npm start`
    - *Note: This runs the compiled JavaScript from the `dist` folder.*

## Step 3: Environment Variables
Scroll down to the **Environment Variables** section and click **Add Environment Variable**. Add the following:

| Key | Value |
|-----|-------|
| `MONGO_URI` | Your MongoDB Connection String (e.g., `mongodb+srv://...`) |
| `JWT_SECRET` | Your JWT Secret (e.g., `mysecretkey`) |
| `PORT` | `5000` (Render will override this internally, but good to have) |

> **Security Note:** Never commit your `.env` file to GitHub. Always set secrets in the Render dashboard.

## Step 4: Deploy
1. Click **Create Web Service**.
2. Render will start the build process. You can watch the logs.
3. Once the build finishes, you will see "Service is live".
4. Copy the URL provided (e.g., `https://primetrade-backend.onrender.com`).

## Step 5: Update Frontend
Once the backend is live, you will need to update your frontend to point to the new backend URL instead of `localhost:5000`.

1. Go to `frontend/src/services/api.ts`.
2. Change `baseURL` to your new Render URL.
3. Commit and push the frontend changes.
4. If you deploy the frontend (e.g., on Vercel or Render Static Site), make sure to use the new URL there as well.
