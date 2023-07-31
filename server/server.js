'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');
const http = require('http');
// Port to access later in the listen function.
const PORT = process.env.PORT || 8080;
// Bringing in the "JSON".
const json = fs.readFileSync('C:/Users/PCC12/Documents/cox_james/code/projects/webDesign/blog/server/data/blog.json', 'utf-8');
// console.log("first json call",json);

// HTML client file for verification in the "api's".
const clientHTML = fs.readFileSync('site/blog.html', 'utf-8');
// console.log("I'm the HTML client", clientHTML);
// 
const blog = JSON.parse(json).blogs;
console.log("first blog call",blog);
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  // index: false,
  // maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static('site', options));
// 
app.post("/api/blogPost", ({ body }, req, res) => {
  let blogId = {}
  let createPost = body;
  console.log("I'm alive, I'm alive, I'm the body ", createPost);
  

  // console.log("JSON", JSON.parse(json).blogs);  
  // console.log("JSON - AFTER", blog);
  // need to write to the "json".
});
// Creating a server.
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
