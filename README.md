# jobjack_dir Directory Listing Application
This is a directory listing application that consists of a backend API and a frontend client.

 Node.JS API that allows a client app to: Obtain the full directory listing of a given directory path on the local filesystem of the host machine where the API is running. Include the filename, full path, file size, extension/file type and created date in the result.

## API Setup

To run the API, follow these steps:

1. Open a terminal and navigate to the API directory.
-cd node_api

2. Install the dependencies using npm.
-npm install

3. Start the API server.
-node index.js

The API server will start running on `http://localhost:3000`.

## Client Setup

To run the client, follow these steps:

1. Open a new terminal and navigate to the client directory.
-cd angular_client_app

2. Install the dependencies using npm.
-npm install

3. Start the development server.
-ng serve


The client application will be served at `http://localhost:4200`.

Open a web browser and visit `http://localhost:4200` to access the directory listing application.

## Note

Make sure you have Node.js and npm installed on your machine before running the application.

