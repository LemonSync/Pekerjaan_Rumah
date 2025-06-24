const { db } = require("../firebase");

module.exports = async (req, res) => {
  const ref = db.ref("jadwal");

  if (req.method === "GET") {
    ref.once("value", (snapshot) => {
      res.status(200).json(snapshot.val() || {});
    });
  } else if (req.method === "POST") {
    const { hari, tugas } = req.body;
    if (!hari || !tugas) return res.status(400).send("Data tidak lengkap");

    await ref.child(hari).push(tugas);
    res.status(200).json({ message: "Tugas ditambahkan" });
  } else {
    res.status(405).end();
  }
};
