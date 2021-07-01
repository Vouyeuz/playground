function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  mahasiswa.tidur = function (bobo) {
    this.energi -= bobo * 10 + 5;
    console.log(`Met bobo ya, ${this.nama}.`);
  };

  return mahasiswa;
}

let fahrizal = Mahasiswa("Fahrizal", 100);
let indi = Mahasiswa("Indi", 200);
let dirgantara = Mahasiswa("Dirgantara", 300);
