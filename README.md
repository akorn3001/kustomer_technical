# Kustomer Technical Challenege - Alex Kornfeld

This project is written entirely in JavaScript. I use a `package.json` file for installed npm packages (`isomorphic-fetch` and `es6-promise` for making HTTP requests using the Fetch API).

## Instructions
To see the project in action repeat the following steps:
1. Clone this repo to your machine
2. CD into the project directory
3. Save the `api_token.txt` file you should have received into the root of the project. **Don't rename the file!**
4. Run `npm install`
5. Run `node script.js`

## API Key
Logging in to Kustomer I generated an API Key for the project. I copied its value into a `api_token.txt` file. If you are running this project from your machine, you should have received the `api_token.txt` file from me (refer to step 3 from the instructions above).

## csv to JSON
For this assignment, I downloaded customers data from a Google spreadsheet to a .csv file and saved the file (`data.csv`) to the root of this project. From there, I wrote a script (`csv_to_json.js`) to convert the .csv file to JSON so it could be processed.

## script.js
This file is where the magic happens. Importing the customers' JSON data at the top of the file and iterating through the customers' data, I use Fetch to send `POST` requests to the Kustomer API.
