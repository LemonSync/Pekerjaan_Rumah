const { db } = require('../lib/firebase.js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { subject, task, due_date, token } = req.body;

  if (!subject || !task || !due_date || !token) {
    return res.status(400).send('Data tidak lengkap');
  }

  if (token !== process.env.TOKEN) {
    return res.status(403).send('Token tidak valid');
  }

  try {
    await db.collection('tasks').add({
      subject,
      task,
      due_date,
      created_at: new Date().toISOString()
    });

    return res.status(200).json({ message: 'Tugas berhasil disimpan' });
  } catch (err) {
    console.error('Gagal menyimpan tugas:', err);
    return res.status(500).send('Gagal menyimpan tugas');
  }
};
