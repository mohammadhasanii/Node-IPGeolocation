const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
const runApplication = () => {
  app.listen(3000);
  console.log("app is running");
};

async function getInfoIpAddress(req, res) {
  const ip = await req.body.ip;
  if (!req.body.ip || req.body.ip.length < 4) {
    return await res.json({
      success: false,
      error: "ip is required",
    });
  }

  const request = await fetch(`http://ip-api.com/json/${ip}`);
  const result = await request.json();
  return res.json({
    success: true,
    ipAddress: result,
  });
}

app.post("/", getInfoIpAddress);

runApplication();
