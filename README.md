# Amherst Education Foundation Website

This is a repository for the website revamp of the Amherst Education Foundation project (AEF), a foundation for support K12 schools in the Amherst area. Created with the MERN stack.

# Setup Instructions

## Setup Local DB
Create a database specific to your testing:
1. Follow the instructions on [Atlas](https://www.mongodb.com/atlas/database) to create a test database for this project. 

    Note: This will eventually be replaced with a shared server version.

2. Once set up, navigate to connect>Connect your application and copy the connection string/url for Node.js driver ('mongodb://...'). 

3. Clone this repo (if not already) and replace the text in `.env` such that:

    `MONGODB_URI = 'Your connection string'`

## Prepare and Run Application
1. Open a terminal window in your project directory
2. Install the dependencies in package.json by running: 

    `npm install`

3. Once finished, start the application: 

    `npm run dev`

    Note: This should open a new tab in your browser, otherwise access [http://localhost:3000](http://localhost:3000) to view the app in your browser.
    This will concurrently run start and server (including the db connection code).

Now you can interact with the app and create articles!


# Running the application again
To run the application again, skip to steps 3 and 4 of running the app.


