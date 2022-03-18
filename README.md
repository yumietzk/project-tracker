# Project Tracker

[View Demo here](https://project-tracker-myapp.herokuapp.com/)

A project tracker app built with MERN stack (Mongo DB, Express, React JS, Node.js).  
I used Firebase for user authentication. After users log in, they can create a new project and manage it. This app allows users to show and manage all projects by status and all tasks and due dates of each project for time management.  
I also used React Final Form for form validation in Login & Signup pages.

## Features

<!-- React dnd -->
<!-- timeline -->

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

Use below login email and password, or sign up as a new user.  
Email: test@gmail.com  
Password: test1234

#### Log in page

![Login page](https://user-images.githubusercontent.com/61277579/159061477-538f2bfc-e4b4-407f-abc2-e6341d3ed1a0.jpeg)

#### Sign up page

![Signup page](https://user-images.githubusercontent.com/61277579/159061621-44489a05-14ff-4408-a539-3cb2fdc94fda.jpeg)

After logging in, users go to a projects page.

### Create a new project

Users can create a new project by clicking a plus button on top right. Users must include title, date created, status, due date and description. After clicking a create button, they can see a new project on a projcts page.  
![Create a new project](./assets/creatNew.gif)

### Edit a project

Users can edit a project by clicking three dots on top right in each project card. Users can edit information that they want to update and click an update button to complete editting.
![Edit a project](./assets/editProject.gif)

### Manage tasks

In a tasks page, users can see and manage tasks in each project except for completed projects. Users can manage tasks by clicking a checkbox besides each task to check or uncheck.
![Manage tasks](./assets/manageTasks.gif)

### Check time manage

In a time manage page, users can check each project's due date and how many tasks are left with a timeline calendar and a table. Users can sort projects by due date and also can check the detail of projects.
![Manage tasks](./assets/manageTasks.gif)

## Built With

- React JS
- Redux
- React Router
- React Final Form
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
