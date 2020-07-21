const http = require("http");

var PORT = 7000;
const PORT2 = 7500;

const quotes = [
    "I have a favourite saucepan!",
    "Creativity is 99% perspiration and 1% inspiration",
    "I said pet, I said love, I said darl, I said pet.",
    "Innocence proves nothing.",
    "In the grim darkness of the distant future, there is only war."
]

var i = 0;
function handleRequest1(request, response) {
    const values = []
    for (value in request)
    values.push(value);
    (i > values.length ? i = 0 : true)
    response.end( request.connection + ":" + values[i++]);
}

function handleRequest2(request, response) {
    response.end(quotes[Math.floor(Math.random()*quotes.length)]);
}

var server = http.createServer(handleRequest1);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, () => console.log("Server listening on http://localhost:" + PORT));

server2.listen(PORT2, () => console.log("Server also listening on http://localhost:" + PORT2));