import express from "express";
import { createClient } from "@supabase/supabase-js";
import { ethers } from "ethers";

// Configurazione Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => res.send("✅ App Runner is alive"));

// Funzione finta di polling
console.log("✅ Polling worker avviato");

function checkPendingTransactions() {
  const timestamp = new Date().toISOString();
  console.log(`🔁 Polling eseguito alle ${timestamp}`);
  // Simula logica di polling (da sostituire con vera logica in futuro)
}

// Poll ogni 15 secondi
setInterval(checkPendingTransactions, 15000);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
