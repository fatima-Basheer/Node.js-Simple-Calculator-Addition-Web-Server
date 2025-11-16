const sumRequestHandler = (req, res) => {
  console.log("Sum", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const prams = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(prams);
    const result = Number(bodyObj.first) + Number(bodyObj.sec);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Addition</title></head>");
    res.write(`<body style="display:flex; justify-content:center; align-items:center; height:100vh;"><h1>${result}</h1>`);

    res.write("</body>");
    res.write("</html>");
    res.end();
    console.log(result);
  });
};

exports.sumRequestHandler = sumRequestHandler;
