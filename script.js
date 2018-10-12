// Necessary imports
const fetch = require("isomorphic-fetch");
const fs = require("fs");
const users = require("./csv_to_json");

// Read in API Key and remove breakline from the end of the string
let API_TOKEN = fs.readFileSync("./api_token.txt").toString('utf-8').split('\n').shift();


// Required fields for the HTTP requests
const url = "https://api.kustomerapp.com/v1/customers";
const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_TOKEN}`
};

// Iterate through each user and send an HTTP 'POST' request with their user data
users.forEach(userData => {
  fetch(url, {
    method: "POST",
    headers,
    data: userData
  }).then(response => {
    console.log(`The entity was created successfully with a ${response.status} response` );
  }).catch(error => {
    console.log(error);
  });
});
