**User Management App (Frontend)**

This is a React application that consumes the https://dummyjson.com/users API to display, search, add, and delete users.

**Features

Fetch and display a list of users (Name, Company, Role, Country)

Refresh button to reload the user list

Search functionality (Filter by name, company, role, or country)

Print Functionality

Pagination Functionality

Edit User Detail Functionality

Sort Functionality with Ascend and Descend order and also i implement sort by name, sort by role, sort by country

Add a user (Stored in database)

Delete users (Stored in database)

**Tech Stack

-React

-Chakra UI (For UI components)

-Axios (For API requests)

**Installation

Clone the repository:

git clone <your-repo-link>
cd frontend

Install dependencies:

npm install

Start the development server:

npm start

**Usage

The user list is fetched from https://dummyjson.com/users.

Click the refresh button to reload the user list.

Use the search bar to filter users.

Click the + button to add a new static user.

Click the delete button to remove a user from the list.

**Folder Structure

frontend/
│-- src/
│   ├── components/       # Reusable components
│   ├── pages/            # Main pages
│   ├── services/         # API service functions
│   ├── model/            # User model
│   ├── App.js            # Main application
│   ├── index.js          # React entry point
│-- public/
│-- package.json
│-- README.md

**Dependencies

react

react-dom

chakra-ui/react

axios