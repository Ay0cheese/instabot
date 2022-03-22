const express = require("express");
const app = express ();
const Instagram = require("instagram-web-api");

require("dotenv").config();

const port = process.env.PORT || 4000;

const instagramLoginFunction = () => {
     const client = new Instagram ({
         username: process.env.INSTAGRAM_USERNAME,
         password: process.env.INSTAGRAM_PASSWORD,
     });

};

instagramLoginFunction();

app.listen(port, () =>{
    console.log(`Listening on port ${port}...`);
});