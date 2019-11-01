# Coding Challenge
We want you to create a simple app that lists some users in a table, and click each user to display some additional information about that given user. How much additional information you want to display for a given user, is up to you.
We have provided you with a simple backend and a boilerplate React app, that should contain everything for you to get started. The list must contain the:

- users name
- username
- email
- phone number 
- company

## Using the API
The API runs on a simple express backend, and runs on localhost port 3000, and has two endpoints

* `/api/users`
 Returns a JSON collection with 10 users
* `/api/user/USER_ID`
 Returns a specific user. `USER_ID` represents the id of the single user you want to fetch

## Restrictions
* You may not use a CSS framework such as Bootstrap

## Requirements
* You must use React
* The app and table must be responsive, with a “mobile-first” approach in mind.
* You must use appropriate YouSee colors. You can find the color palette here: https://dna.yousee.dk.
* The users must be fetched asynchronously using JavaScript.
* Unfortunately the backend is sometimes rather slow. So you must display a loading indicator while you're loading the data.
* You must deliver the app in a git repository. You decide if you want to use GitHub, Bitbucket, GitLab or whatever. 

## Starting the application
* Unzip the project
* Open your terminal and navigate to the folder where you extracted the project to
* Run `npm install` to install some dependencies
* Open the project in your text editor
* Start the backend by running `npm start backend` and then start the frontend by running `npm start frontend` in another window