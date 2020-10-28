init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

const compression = require('compression')
const express = require('express')

// compressed compression function
var app=express();function shouldCompress(s,e){return!s.headers["x-no-compression"]&&compression.filter(s,e)}app.use(compression({filter:shouldCompress}));