let menu = [
  { id: 1, nama: 'Kopi Susu', harga: 18000, kategori: 'Kopi' },
  { id: 2, nama: 'Teh Tarik', harga: 15000, kategori: 'Teh' },
  { id: 3, nama: 'Americano', harga: 17000, kategori: 'Kopi' },
  { id: 4, nama: 'Cappuccino', harga: 22000, kategori: 'Kopi' },
  { id: 5, nama: 'Matcha Latte', harga: 25000, kategori: 'Teh' },
  { id: 6, nama: 'Roti Bakar Cokelat', harga: 16000, kategori: 'Makanan' },
  { id: 7, nama: 'Kentang Goreng', harga: 18000, kategori: 'Makanan' },
  { id: 8, nama: 'Es Jeruk', harga: 12000, kategori: 'Minuman' }
];
let nextId = 9;

const getAll = () => menu;

const getById = (id) => menu.find((m) => m.id === id);

const create = (data) => {
  const item = { id: nextId++, ...data };
  menu.push(item);
  return item;
};

const update = (id, data) => {
  const index = menu.findIndex((m) => m.id === id);
  if (index === -1) return null;
  menu[index] = { ...menu[index], ...data };
  return menu[index];
};

const remove = (id) => {
  const index = menu.findIndex((m) => m.id === id);
  if (index === -1) return false;
  menu.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };