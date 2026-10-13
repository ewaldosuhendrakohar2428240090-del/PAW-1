let dosen = [
  { id: 1, nama: 'ujang', jenjang: 'S1', fakultasId: 1 },
  { id: 2, nama: 'doni', jenjang: 'S1', fakultasId: 1 },
];
let nextId = 3;

function getAll(idDosen) {
  if (idDosen) return dosen.filter((p) => p.id === idDosen);
  return dosen;
}

function getById(id) {
  return dosen.find((p) => p.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  dosen.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };