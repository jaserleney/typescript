import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Welcome Api",
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
