# Scatch-
Welcome to **Scatch** — your go-to backend for an easy and smooth bag-selling app!

---

## What is Scatch?

Scatch is a backend application designed to handle all the server-side magic for a modern bag-selling platform. It manages user accounts, product listings, carts, orders, and more — making sure everything runs smoothly behind the scenes.

---

## Features

- User authentication & session management  
- Product catalog with images, descriptions, and prices  
- Shopping cart to add, update, or remove items  
- Order processing and history tracking  
- Secure password handling with bcrypt  
- Flash messages for smooth user experience

---

## Tech Stack

- **Node.js** with **Express.js** for server-side logic  
- **MongoDB** for database storage  
- **Mongoose** for schema modeling and data management  
- **bcrypt** for password hashing  
- **express-session** & **connect-flash** for session and messaging support  
- Environment variables handled via **dotenv**

---

## How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/scatch.git
   cd scatch

2. Install dependencies

bash
Copy code
npm install

3.Set up environment variables
Create a .env file in the root folder with your config, e.g.:

ini
Copy code
PORT=3001
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

4.npm start

5.Open your browser
Visit http://localhost:3001 to see your app in action!



