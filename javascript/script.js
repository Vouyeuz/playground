// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.tidur = function (bobo) {
//     this.energi -= bobo * 10 + 5;
//     console.log(`Met bobo ya, ${this.nama}.`);
//   };

//   return mahasiswa;
// }

// let fahrizal = Mahasiswa("Fahrizal", 100);
// let indi = Mahasiswa("Indi", 200);
// let dirgantara = Mahasiswa("Dirgantara", 300);

// // simple calculator

// function calculator(a,b,sign){
//   if ((typeof a === "number") && (typeof b === "number")) {
//     switch (sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     }
//   }
//   console.log(calculator);
//   return "unknown value";
// }

//hoisting, scope, execution phase

// function introduceYourSelf() {
//   return `Hi, my name is ${name}, a regular ${age} years old ${gender}. I am a proud ${religion}.`;
// }
// const name = "Fahrizal Indi Dirgantara";
// const age = [27, 24];
// const gender = "Male";
// const religion = "Islam";
// console.log(introduceYourSelf());
var nama = "Fahrizal";
function satu() {
  // var nama = "Fahrizal";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Indi";
satu();
dua("Dirgantara");
console.log(nama);
