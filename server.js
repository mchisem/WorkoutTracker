const compression = require('compression')
const express = require('express')

// compressed compression function
var app=express();function shouldCompress(s,e){return!s.headers["x-no-compression"]&&compression.filter(s,e)}app.use(compression({filter:shouldCompress}));


const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });