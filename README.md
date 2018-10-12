# Kustomer Technical Challenege - Alex Kornfeld

This project is written entirely in JavaScript. I use a `package.json` file for installed npm packages (`isomorphic-fetch` and `es6-promise` for making HTTP requests using the Fetch API).

## Instructions
To see the project in action repeat the following steps:
1. Clone this repo to your machine
2. CD into the project directory
3. Run `npm install`
4. Run `node script.js`

## API Key
Logging in to Kustomer I generated an API Key for the project. I copied its value into the `api_token.js` file, and added it to the `.gitignore`. This was a conscious choice in order to avoid pushing the key up to GitHub. From there I imported the value at the top of `script.js`.

## csv to JSON
For this assignment, I downloaded customers data from a Google spreadsheet to a .csv file and saved the file (`data.csv`) to the root of this project. From there, I wrote a script (`csv_to_json.js`) to convert the .csv file to JSON so it could be processed.

## script.js
This file is where the magic happens. Importing the customers' JSON data at the top of the file and iterating through the customers' data, I use Fetch to send `POST` requests to the Kustomer API.
