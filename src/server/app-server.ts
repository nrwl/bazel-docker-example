import * as express from "express";
import * as compression from "compression";

const app = express();

app.use(compression());

app.use("/", express.static("./src/prodapp"));

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "./src/prodapp" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Application Started`);
});
