const http = require("http");
const fs = require("fs");

const PORT = 8080;
const server = http.createServer(handleRequest);
let temp = "";

function renderThankyouPage(request, response) {
    // let consoleStuff="";
    let submittedData = ""
    let html = '<!DOCTYPE html><html lang="en"><body><h1>This is a blank page<h1></body></html>'
    request.on("data", function (data) {
        submittedData += data;
        html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Submission Form</title>
    </head>
    <body>
    <h1>Thanks for your submission!</h1>
    <p>${submittedData}</p>
    </body>
    </html>`
    });
    request.on("end", function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        // console.log(consoleStuff);
        response.end(html);
    });
}

function handleRequest(request, response) {
    switch (request.url) {
        case "/thanks":
            renderThankyouPage(request, response);
        default:
            fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) {
                    throw err;
                }
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
            });
    }
}

server.listen(PORT, function () {
    console.log("Listening on localhost:" + PORT);
})