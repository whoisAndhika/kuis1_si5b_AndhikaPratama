const Menu = require('../models/menuModel');

const dataValid = (body) => {
  const { nama, harga, kategori } = body;
  return nama && kategori && typeof harga === 'number' && harga > 0;
};

exports.getAll = (req, res) => {
  let data = Menu.getAll();
  const { kategori } = req.query;
  if (kategori) {
    data = data.filter((m) => m.kategori.toLowerCase() === kategori.toLowerCase());
  }
  res.json({ status: 'sukses', jumlah: data.length, data });
};

exports.getById = (req, res) => {
  const item = Menu.getById(Number(req.params.id));
  if (!item) return res.status(404).json({ status: 'gagal', pesan: 'Menu tidak ditemukan' });
  res.json({ status: 'sukses', data: item });
};

exports.create = (req, res) => {
  if (!dataValid(req.body)) {
    return res.status(400).json({ status: 'gagal', pesan: 'Field nama, harga (angka > 0), dan kategori wajib diisi' });
  }
  const { nama, harga, kategori } = req.body;
  const item = Menu.create({ nama, harga, kategori });
  res.status(201).json({ status: 'sukses', data: item });
};

exports.update = (req, res) => {
  const { nama, harga, kategori } = req.body;
  const data = {};
  if (nama !== undefined) data.nama = nama;
  if (kategori !== undefined) data.kategori = kategori;
  if (harga !== undefined) {
    if (typeof harga !== 'number' || harga <= 0) {
      return res.status(400).json({ status: 'gagal', pesan: 'Harga harus angka lebih dari 0' });
    }
    data.harga = harga;
  }
  if (Object.keys(data).length === 0) {
    return res.status(400).json({ status: 'gagal', pesan: 'Isi minimal satu field: nama, harga, atau kategori' });
  }
  const item = Menu.update(Number(req.params.id), data);
  if (!item) return res.status(404).json({ status: 'gagal', pesan: 'Menu tidak ditemukan' });
  res.json({ status: 'sukses', data: item });
};

exports.remove = (req, res) => {
  const ok = Menu.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ status: 'gagal', pesan: 'Menu tidak ditemukan' });
  res.status(204).send();
};