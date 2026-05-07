import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { EMAILS } from "./emails";
import { classifyEmails, ClassifiedEmail } from "./llm";

const app = express();
app.use(cors());
app.use(express.json());

// Static Frontend
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/emails", (_req, res) => {
  res.json(EMAILS);
});

let cached: ClassifiedEmail[] | null = null;

app.post("/api/classify", async (_req, res) => {
  try {
    if (!cached) cached = await classifyEmails(EMAILS);
    res.json(cached);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
