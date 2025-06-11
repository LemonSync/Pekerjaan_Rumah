const { db } = require('../../lib/firebase.js');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed');
  }

  const besok = new Date();
  besok.setDate(besok.getDate() + 1);
  const yyyy = besok.getFullYear();
  const mm = String(besok.getMonth() + 1).padStart(2, '0');
  const dd = String(besok.getDate()).padStart(2, '0');
  const besokStr = `${yyyy}-${mm}-${dd}`;

  try {
    const snapshot = await db.collection('tasks').where('due_date', '==', besokStr).get();

    const results = [];
    snapshot.forEach(doc => {
      results.push(doc.data());
    });

    return res.status(200).json(results);
  } catch (err) {
    console.error('Gagal mengambil tugas:', err);
    return res.status(500).send('Gagal mengambil data');
  }
};
