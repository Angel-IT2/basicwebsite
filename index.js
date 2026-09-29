const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

    if (request.url === "/") {
        fs.readFile("index.html", (error, data) => {
            response.end(data);
        });
    }

    else if (request.url === "/about") {
        fs.readFile("about.html", (error, data) => {
            response.end(data);
        });
    }

    else if (request.url === "/contact-me") {
        fs.readFile("contact-me.html", (error, data) => {
            response.end(data);
        });
    }

    else {
        fs.readFile("404.html", (error, data) => {
            response.end(data);
        });
    }

});

server.listen(8080);