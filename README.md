# Careers Find App

## Project Description
The Careers Find App is a web application designed to display job listings from a database. It features UI where users can view various job opportunities, and expand listings to view additional details. This project is ideal for anyone looking to integrate a frontend with backend APIs and manage data dynamically from a MongoDB database.

### Features
- Display job listings dynamically from a backend API.
- "Learn More" button to toggle additional details for each job.

---

## Technologies Used

### Frontend
- **React**: React's component-based architecture made it easy to create reusable components for each job listing, allowing dynamic rendering of job data.
- **Axios**: Used for making HTTP requests to the backend API to fetch job data.
- **Tailwind CSS**: Chosen for its utility-first approach, enabling quick and responsive styling directly within JSX.

### Backend
- **Node.js**: Used for the backend server, allowing us to create an API that serves job data to the frontend.
- **Express**: A lightweight and flexible framework for handling server requests.
- **MongoDB & Mongoose**: MongoDB is used as the database to store job listings. Mongoose provides a schema-based solution to model the data, making it easy to manage.

### Why These Technologies?
These technologies were chosen for their flexibility, ease of integration, and popularity in building modern, scalable web applications. React and Tailwind CSS enable a fast, responsive, and visually appealing frontend, while Node.js and Express allow for efficient handling of API requests and database interactions.

---

## Setup Instructions

To run this project locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/en/) and npm installed on your machine.
- MongoDB installed and running locally or access to a MongoDB Atlas cluster.

### 1. Clone the Repository
```bash
git clone <repository_url>
```

### 2. Install Dependencies on both Frontend and Backend Folders
```bash
cd Backend
npm install
cd ../Frontend
npm install
```

### 3. Run the Backend
```bash
cd Backend
node server.js
```
The backend server should now be running at `http://localhost:5000`.

### 4. Run the Frontend
In a new terminal window, start the frontend:
```bash
npm run dev
```
The app should now be accessible at `http://localhost:5173`.


## Challenges Faced

1. **Managing State in React**: Initially, expanding job details for each listing caused all listings to expand simultaneously. This was solved by using a unique identifier for each job and managing state independently.
2. **API and Database Integration**: Not being familiar with API and Databases before, it was tough ensuring that MongoDB connected properly to the backend and carefully managing environment variables and thorough error handling.

### How I Overcame Them
Detailed testing and debugging helped me identify and solve issues, and breaking down problems into smaller parts made them easier to address.

---

## Future Improvements

Here are some potential improvements we plan to implement:
- **Filters**: The filters part being incomplete can be developed into a proper system where users can browse through their desired jobs with just a click
- **User Authentication**: Allow users to save job listings or apply directly from the platform.
- **Real-Time Search**: Implement a real-time search function that filters job listings as the user types.
- **Pagination**: For better performance and user experience, implement pagination to manage a large number of job listings.

--- 