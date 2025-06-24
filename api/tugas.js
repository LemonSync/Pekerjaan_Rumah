const admin = require("../firebase");

module.exports = async (req, res) => {
  const db = admin.database();
  const ref = db.ref("tugas");

  const VALID_TOKEN = "gurukelas123";

  if (req.method === "POST") {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace("Bearer ", "").trim();

    if (token !== VALID_TOKEN) {
      return res.status(403).json({ error: "Akses ditolak. Token tidak valid." });
    }

    const { date, namaTugas, deskripsi } = req.body;

    if (!date || !namaTugas || !deskripsi) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

    await ref.child(date).push({
      namaTugas,
      deskripsi,
      dibuatPada: new Date().toISOString(),
    });

    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    const besok = new Date();
    besok.setDate(besok.getDate() + 1);
    const tanggalBesok = besok.toISOString().split("T")[0];

    const snapshot = await ref.child(tanggalBesok).once("value");
    return res.status(200).json(snapshot.val() || {});
  }

  res.status(405).end();
};
