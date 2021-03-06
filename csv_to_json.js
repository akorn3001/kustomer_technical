
// Read in .csv file, capturing column names and individual customers
const fs = require("fs");
const text = fs.readFileSync("./data.csv").toString('utf-8');
const textByLine = text.split(/[\r\n]+/);

let columnNames = textByLine.slice(0, 1)[0].split(',');
let data = textByLine.slice(1).map(line => {
  return line.split(',');
});

// Convert single user to JSON
const jsonifyUser = (user, names = columnNames) => {
  let jsonObj = {};
  for (let i = 0; i < user.length; i++) {
    jsonObj[names[i]] = user[i];
  }

  return jsonObj;
};

// Convert all users in users array to JSON
const jsonifyEverybody = (usersArray, cb) => {
  let result = [];

  usersArray.forEach(user => {
    result.push(cb(user));
  });

  return result;
};

// Create JSON object of all the users
let JSONUsers = jsonifyEverybody(data, jsonifyUser);

// COMMENT IN THE CODE BELOW TO WRITE TO FILE WITH JSON DATA
// fs.writeFile("./data.json", JSON.stringify(JSONUsers, null, 3), (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   console.log("File has been created");
// });

module.exports = JSONUsers;
