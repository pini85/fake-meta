const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://fake-meta-client.netlify.app"],
    credentials: true,
  })
);
const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));

app.get("/api/login", (req, res) => {
  res.cookie("foo", "bar", {
    maxAge: 86400 * 1000, // 24 hours
    httpOnly: true, // http only, prevents JavaScript cookie access
    secure: true, // cookie must be sent over https / ssl
    sameSite: "None",
  });
  res.status(200).json({ status: "cookies set!" });
});

app.get("/api/admin", (req, res) => {
  console.log("cookies", req.cookies);
  let cookie = req.cookies["foo"];
  if (cookie) {
    res.status(200).send({ message: "successfull" });
    console.log("im here");
    // res.redirect("localhost:3000/");
  } else {
    res.status(401).send({ message: "not authorized" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
