# CRWN Clothing

Fully functional E-commerce clothing site built using React, Redux, Stripe and common React packages

Hosted Location: https://erinkelsey.github.io/crw-clothing-react/

### React Packages

- node-sass
- react-router-dom - v5.2.0
- firebase
- redux
- redux-logger
- react-redux
- reselect
- redux-persist
- react-stripe-checkout

## Setup

### Node

    $ npm install

### Environment Variables

Create a .env file in the main project folder with the following variables:

    REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-key

NOTE: Stripe key is accessed in file: src/components/stripe-button/stripe-button.component.jsx. ALSO, Stripe key MUST be your Test Key.

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

1. Under the Develop header on the Sidebar, click on Authentication
2. Go to the Sign-in method tab
3. Click on Add new provider
4. Click on Email/Password under Native Providers
5. Click enable beside Email/Password option
6. Click on Save

#### DATABASE

1. Under the Develop header on the Sidebase, click on Firestore Database
2. Click on Create Database
3. Select Start in test mode
4. Click Next, and choose a location
5. Click Enable

## Run

    $ npm start

## Test

    $ npm run test

## Build

    $ npm run build

## Deploy to GitHub Pages

1.  Install GitHub Pages in App:

    $ npm add gh-pages

2.  Add the following to scripts section of package.json:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

3.  Change the homepage in package.json to the current GitHub URL for you project. Example:

    "homepage": "https://erinkelsey.github.io/crw-clothing-react/"

4.  Run script:

    $ npm run deploy

5.  Push to GitHub

## Notes on Firestore

### General

A query is a request made to Firestore to get something from the database.

Firestore returns two types of objects: references and snapshots. Of these objects, they can be either Document or Collection versions.

Firestore will **always** return these objects, even if nothing exists at that id from the query.

### QueryReference

An object that represents the "current" place in the database being queried.

We get them by calling either:

    firestore.doc('users/:userId');
    firestore.collections('users')

The queryReference object does not have the actual data of the collection or document. Instead, it has properties that tell us details about it, or the method to get the Snapshot object, which can give the necessary data.

### DocumentReference vs CollectionReference

Used to perform CRUD methods. The documentRef methods are: **.set()**, **.get()**, **.update()**, and **.delete()**.

Documents can be added to collections using the collectionRef object using the **.add()** method.

    collectionRef.add({value: prop})

The snapshotObject is obtained from the referenceObject using the **.get()** method:

    documentRef.get() OR
    collectionRef.get()

NOTE:

documentRef returns a **documentSnapshot** object

collectionRef returns a **querySnapshot** object

### DocumentSnapshot

Object that can be used to check if a document exists at this query using the **.exist** property, which returns a boolean.

Can also be used to get the actual properties on the object by calling the **.data()** method, which returns us a JSON object of the document.

## Notes on Redux

### Why Use?

Good for managing large state

Useful for sharing data between components

Predictable state management using the 3 principles

### 3 Principles

1. Single source of truth
2. State is read only
3. Changes using only pure functions
   - Receives an input, and always returns an output that is predictable

### Redux Flow

Action -> Root Reducer -> Store -> DOM Changes

One way data flow!

![Redux Flow](/redux-flow.png 'Redux Flow')
