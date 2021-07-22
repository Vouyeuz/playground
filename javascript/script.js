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
// var nama = "Fahrizal";
// function satu() {
//   // var nama = "Fahrizal";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Indi";
// satu();
// dua("Dirgantara");
// console.log(nama);

// KeDa Tech: Programming Test

// for x in range(1,101):
//     if x % 15 == 0:
//         print "FizzBuzz" # Catch multiples of both first.
//     elif x % 3 == 0:
//         print "Fizz"
//     elif x % 5 == 0:
//         print "Buzz"
//     else:
//         print x

// console.log(x);

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 12 === 0) {
//     console.log("HetDah");
//   } else if (i % 3 === 0) {
//     console.log("Het");
//   } else if (i % 4 === 0) {
//     console.log("Dah");
//   } else {
//     console.log(i);
//   }
// }

let beads = [1, 2, 3, 4, 5, 6, 7];

beads.push(8, "end");
beads.unshift("start");
console.log(beads);
beads.pop();
console.log(beads);
