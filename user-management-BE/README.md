**User Management API (Backend)**


**Features
- Fetch and display a list of users
- MySQL database integration
- Implements best practices like environment variables and error handling

**Tech Stack
Node.js (Express.js for backend framework)
MySQL (mysql2 for database connection)
dotenv (For environment variables)
cors (For handling cross-origin requests)


**Installation
1. Clone the repository:

git clone <your-repo-link>
cd backend
2. Install dependencies:

npm install
3. Set up environment variables:
Create a .env file in the root directory and add:


DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
PORT=5000
4. Set up the database:
Import the provided SQL dump file (database.sql) into your MySQL database.

5. Start the server:

npm start
or for development with auto-restart:


npm run dev
API Endpoints
Fetch all users:

GET /users
Response: List of users from the MySQL database.


**Folder Structure

backend/
│-- src/
│   ├── routes/         # API route handlers
│   ├── controllers/    # Business logic for each route
│   ├── models/         # Database models and queries
│   ├── middleware/     # Middleware functions
│   ├── config/         # Database connection
│   ├── server.js       # Main entry point
│-- database.sql        # SQL dump for MySQL
│-- .env                # Environment variables
│-- package.json
│-- README.md


**Dependencies
express (Backend framework)
mysql2 (Database connection)
dotenv (Environment variables)
cors (Cross-Origin Resource Sharing)