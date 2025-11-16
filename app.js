const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Addition</title></head>");
    res.write(
      "<body ><h1>Hi! Welcome</h1><br>"
    );

    res.write("<a href='/calculator'>Go to Addition Page</a>");
    res.write("</body");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Addition</title></head>");
    res.write(
      "<body ><h1>Addition</h1><br>"
    );
    res.write("<br><form action='/calculator-result' method='POST'>");
    res.write("<input type='text' placeholder='Enter num1' name='first'>");
    res.write("<input type='text' placeholder='Enter num2' name='sec'>");
    res.write("<input type='submit' value='sum'>");
    res.write("</form>");
    res.write("</body");
    res.write("</html>");

    return res.end();
  } else if (req.url === "/calculator-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Addition</title></head>");
    res.write("<body><h1>404 Error  Page not found</h1>");

    res.write("<br><a href='/'>Go to Home</a>");
    res.write("</body");
    res.write("</html>");
  }
};

module.exports = requestHandler;
