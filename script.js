// Necessary imports
const fetch = require("isomorphic-fetch");
const API_TOKEN = require("./api_token.js");
const users = require("./csv_to_json");

const url = "https://api.kustomerapp.com/v1/customers";
const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_TOKEN}`
};

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
