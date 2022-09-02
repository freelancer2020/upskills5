import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(` App running on port ${port}`));

// app.use(express.static("./client/rc/build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/rc/build"));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/rc/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "/client/public")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
