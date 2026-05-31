const http = require("http");

function requestHandler(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Hello from Node.js!",
    })
  );
}

const server = http.createServer(requestHandler);

const PORT = process.env.PORT || 3000;

/* c8 ignore next 4 */
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { requestHandler, server };