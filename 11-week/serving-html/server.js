const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);


function handleRequest(request, response) {
    let fileName = "";
    switch (request.url) {
        case "/movies":
            fileName = "/movies.html";
            break;
        case "/foods":
            fileName = "/foods.html";
            break;
        case "/css-frameworks":
            fileName = "/css-frameworks.html";
            break;
        default:
            fileName = "/index.html";
            break;
    }
    fs.readFile(__dirname + fileName, function (error, data) {
        if (error) {
            throw error;
        }
        response.writeHead(200, { "Content-Type": "text/html" })
        response.end(data);
    });
}

server.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});