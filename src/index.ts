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
async function checkPendingTransactions() {
  console.log("🔁 Polling...");
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("status", "waiting")
    .not("pre_order_payment_tx", "is", null)
    .limit(5);

  if (error) console.error("❌ Supabase error:", error);
  else console.log("📦 Orders:", data?.length);
}

// Polling automatico ogni 15s
setInterval(checkPendingTransactions, 15000);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
