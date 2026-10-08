exports.notFound = (req, res) => {
  res.status(404).json({ status: 'gagal', pesan: 'Rute tidak ditemukan' });
};

exports.errorHandler = (err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ status: 'gagal', pesan: 'Format JSON tidak valid' });
  }
  console.error(err);
  res.status(500).json({ status: 'gagal', pesan: 'Terjadi kesalahan pada server' });
};