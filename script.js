const fs = require("fs");
const API_TOKEN = fs.readFileSync("./api_token.txt");
const usersInJSON = require("./csv_to_json.js");

let headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_TOKEN}`
};

console.log(usersInJSON());
