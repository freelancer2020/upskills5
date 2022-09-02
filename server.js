import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(` App running on port ${port}`));

app.use(express.static("./client/rc/build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/rc/build/index.html"));
});
