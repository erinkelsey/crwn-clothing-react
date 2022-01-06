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

## Deploy

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

### QuerySnapshot
