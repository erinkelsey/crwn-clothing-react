# CRWN Clothing

Fully functional E-commerce clothing site built using React, Stripe and common React packages

### React Packages

- node-sass
- react-router-dom - v5.2.0
- firebase

## Setup

### Node

    $ npm install

### Firebase

Website: https://firebase.google.com

#### PROJECT

1. Go to Console
2. Click on Add Project
   - Choose a name for the project. Example: crwn-clothing-db
   - Click Continue until see Create Project, and Click it
3. On the Project Overview page, click on the Web icon (</>) to Add Firebase to the web app
   - Choose a name for the app. Example: crwn-db
   - Click on Register app
   - Copy the firebaseConfig variable, with all of its contents

#### CONFIG IN APP

Create a file in the src/firebase folder called firebase.config.js, and add your config to it. For example:

    const FIREBASE_CONFIG = {
        apiKey: [your-api-key],
        authDomain: "[your-project-id].firebaseapp.com",
        projectId: "[your-project-id]",
        storageBucket: "[your-project-id].appspot.com",
        messagingSenderId: "[message-id]",
        appId: "[app-id]",
        measurementId: "[measurement-id]"
    };

    export default FIREBASE_CONFIG;

NOTE: the variable MUST be named FIREBASE_CONFIG, as that is what the setup in src/firebase/firebase.utils.js is looking for.

#### AUTHENTICATION

##### Google OAUTH

1. Under the Develop header on the Sidebar, click on Authentication
2. Click on the Get Started button
3. Go to the Sign-in method tab
4. Click on Google, and select to enable, and click Save

##### Email and Password

#### DATABASE

## Run

    $ npm start

## Test

    $ npm run test

## Build

    $ npm run build

## Deploy
