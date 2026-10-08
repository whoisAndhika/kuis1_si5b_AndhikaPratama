module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ status: 'gagal', pesan: 'API key tidak valid atau tidak ada' });
  }
  next();
};