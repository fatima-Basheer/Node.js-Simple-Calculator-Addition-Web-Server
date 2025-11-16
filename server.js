const http = require("http");
const requestHandler = require("./app");
const server = http.createServer(requestHandler);
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server has started at http://localhost:${PORT}`);
});
