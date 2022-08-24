const express = require('express');
const {createServer} = require('http');
const realtimeServer = require("./realtimeChat");
const path = require('path');


const app = express();

const httpServer = createServer(app);

//settings
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

//routes
app.use(require("./routes"));


//public
app.use(express.static(path.join(__dirname, "public")));


//levanto el servidor
httpServer.listen(app.get("port"), () => {
    console.log("El servidor esta corriendo en el puerto ", app.get("port"))
});

//llamo al servidor de socket.io
realtimeServer(httpServer);