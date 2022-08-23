const express = require('express');
const {createServer} = require('http');
const path = require('path');


const app = express();

const httpServer = createServer(app);

//settings
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

//routes
app.use(require("./routes"));