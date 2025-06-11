import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("✅ App ESM pronta!");
});

app.get("/health", (_req: Request, res: Response) => {
  res.send("✅ App Runner is alive");
});

setInterval(() => {
  const now = new Date().toISOString();
  console.log(`🔁 Polling... at ${now}`);
}, 15000);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
