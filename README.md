# 🛡️ OAuth Server - GitHub & Google Login

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

<!--
![License](https://img.shields.io/badge/License-MIT-blue)
-->

A minimal and secure OAuth 2.0 server built with **Node.js**, **Express**, and **Axios** to handle GitHub and Google login flows, cookie-based token management, and profile retrieval.

---

## 🚀 Live Demo

| Platform  | Frontend                                            | Backend                                          |
| --------- | --------------------------------------------------- | ------------------------------------------------ |
| 🔗 GitHub | [Frontend](https://oauth-frontend-eac27.vercel.app) | [Backend](https://oauth-server-eac27.vercel.app) |

---

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [How OAuth Flow Works](#-how-oauth-flow-works)
- [Run Locally](#-run-locally)
- [Environment Variables](#-environment-variables)
- [Test the App](#-test-the-app)
- [Folder Structure](#-folder-structure)
- [License](#-license)

---

## ✨ Features

- 🔒 OAuth 2.0 login with GitHub & Google
- 🍪 Secure cookie handling with `httpOnly`, `secure`, and `SameSite`
- 🧠 Token verification middleware
- 📥 Clean API endpoints to fetch user profiles
- 🌍 Deployed on Vercel

---

## 🛠 Technologies Used

- **Node.js** & **Express**
- **Axios** for HTTP requests
- **cookie-parser** for cookie handling
- **dotenv** for environment config
- **Vercel** for deployment

---

## 🔄 How OAuth Flow Works

1. User clicks "Login with GitHub" or "Login with Google" on frontend.
2. Frontend redirects user to backend (`/auth/github` or `/auth/google`).
3. Backend redirects user to the GitHub or Google OAuth consent screen.
4. After consent, the provider redirects back to backend with a `code`.
5. Backend uses that `code` to request an `access_token`.
6. `access_token` is stored in secure `httpOnly` cookie.
7. Frontend calls `/user/profile/github` or `/user/profile/google` to get user info.

> 🔁 The OAuth flow uses environment variables to dynamically construct the authorization and token exchange URLs.
>
> - `GOOGLE_REDIRECT_URI` is used in:
>
>   - The initial redirect to Google’s OAuth consent screen
>   - The server-side token exchange (`/auth/google/callback`)
>
> - `GITHUB_REDIRECT_URI` is recommended for consistency.

---

## 🧑‍💻 Run Locally

### Clone the repo:

```bash
git clone https://github.com/ajmal92786/oauth-server.git
cd oauth-server
npm install
npm start
```

### Related Frontend Repo

To test the backend via UI, clone the frontend:

```bash
git clone https://github.com/ajmal92786/oauth-frontend.git
cd oauth-frontend
npm install
npm run dev
```

Make sure:

- Backend is running on: `http://localhost:4000`
- Frontend is running on: `http://localhost:3000`

---

## 🧾 Environment Variables

### 📌 `.env` for `oauth-server`:

```env
PORT=4000
FRONTEND_URL=http://localhost:3000

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Redirect URIs
GOOGLE_REDIRECT_URI=http://localhost:4000/auth/google/callback
```

### 📌 `.env` for `oauth-frontend`:

```env
VITE_SERVER_BASE_URL=http://localhost:4000
VITE_GITHUB_API_BASE_URL=https://api.github.com
```

📁 Also provide a `.env.example` for contributors.

---

## 🧪 Test the App

- Visit the frontend: [oauth-frontend.vercel.app](https://oauth-frontend-eac27.vercel.app)
- Click “Login with GitHub” or “Login with Google”
- Authorize the app
- Your profile info will be fetched via backend and displayed on the frontend

---

## 📂 Folder Structure

```
oauth-server/
├── middleware/
│   └── index.js          # Access token verification
├── services/
│   └── index.js          # Cookie utility functions
├── .env.example
├── .gitignore
├── index.js               # Main Express server
├── package.json
├── vercel.json
└── README.md
```

---

## 📄 License

This project is for educational purposes. Feel free to fork and use for your own learning or demo needs.

---
