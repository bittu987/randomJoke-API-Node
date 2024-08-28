const express = require("express");

const app = express();

const port = 6060 || process.env.port;

const data = require("./data.json");

// console.log(data);

const lengthOfData = data.length;

// console.log(lengthOfData);

app.get("/random-image", (request, response) => {
  let randomnumber = Math.floor(Math.random() * lengthOfData);
     response.send(data[randomnumber].punchline);
   
});

app.listen(port, () => {
  console.log(`Server is up and running at port no ${port}`);
});
