const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(express.static('public'));

const path = require('path');

const server = app.listen(port, () => console.log(`thistoshallpass app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// routes
app.get("/", (req, res) => 
    res.sendFile(path.resolve(__dirname, 'pages/index.html')));

app.get("/post", (req, res) => 
    res.sendFile(path.resolve(__dirname, 'pages/post.html')));