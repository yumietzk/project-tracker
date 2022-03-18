# Project Tracker

[View Demo here](https://project-tracker-myapp.herokuapp.com/)  

A project tracker app built with MERN stack (Mongo DB, Express, React JS, Node.js).  
I used Firebase for user authentication. After users log in, they can create a new project and manage it. This app allows users to show and manage all projects by status and all tasks and due dates of each project for time management.  

## Features

<!-- ### Search and sort data by categories  
Users can search data by changing genres and sort data by title name, release date and rating. Users can also decide how many data they want to get.  
![Search by category](./assets/searchByCategory.gif)

### See detail  
Users can see the detail of movies and TV shows such as movie trailer, website, casts, reviews and related shows. Users can also jump to a detail page of casts. For TV shows, users can see all seasons and episodes' details. And more to explore!  
![See detail](./assets/seeDetail.gif)

### Search  
Users can search both movies and TV shows related to a term submitted in a search input.  
![Search](./assets/search.gif)

### Sign In & Sign Out  
After users sign in, they can save their favorite movies or TV shows by clicking a favorite heart button in each movie and TV show's detail page, and can see the saved data in a favorite page. Without signing in, the favorite button doesn't show up and they can't save data.  
![Sign in](./assets/sigin.gif) -->

## How To Use

### To log in  
Use below login email and password, or sign in as a new user.  
Email: test@gmail.com  
Password: test1234  

## Built With  
- React JS
- Redux
- React Router
- Mongo DB
- Express
- Node.js
- Firebase  

## Getting Started

### Prerequisites

Install npm.

- npm
  ```
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo.
   ```
   git clone https://github.com/yumietzk/project-tracker.git
   ```
2. Install all of the packages needed for backend and frontend.
   ```
   npm run bootstrap
   ```
3. Set MongoDB Atlas Database at [MongoDB](https://cloud.mongodb.com/account) and connect the application to cluster by setting below in a .env file in a root folder.
   ```
   DB_CONNECTION=yourconnectionstring
   ```
4. Set authentication with [Firebase](https://console.firebase.google.com/u/0/) and connect the application to Firebase by setting below in a .env file in a client folder.
   ```
   REACT_APP_FIREBASE_API_KEY=yourapikey
   REACT_APP_FIREBASE_AUTH_DOMAIN=yourauthdomain
   REACT_APP_FIREBASE_PROJECT_ID=yourprojectid
   REACT_APP_FIREBASE_STORAGE_BUCKET=yourstoragebucket
   REACT_APP_FIREBASE_MESSAGE_SENDER_ID=yourmessagesenderid
   REACT_APP_FIREBASE_APP_ID=yourappid
   ```
5. Start the server.
   ```
   npm run dev
   ```
<!-- 6. Start the server.
   ```
   npm run start
   ``` -->

<!-- ### Testing

- Run tests.
  ```
  npm run test
  ``` -->

## Contact

Yumie Tsuzuki - yumie.tsuzuki@gmail.com

