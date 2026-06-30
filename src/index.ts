import { httpServerHandler } from "cloudflare:node";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Express.js running on Cloudflare Workers!",
  });
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;

  res.json({
    success: true,
    sum: Number(a) + Number(b),
  });
});

export default httpServerHandler({
  port: 3000,
});
