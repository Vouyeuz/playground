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
// // }

// let beads = [1, 2, 3, 4, 5, 6, 7];

// beads.push(8, "end");
// beads.unshift("start");
// console.log(beads);
// beads.pop();
// console.log(beads);






// // SORTING ASCENDING BUBBLE METHOD
// var arr = [21, 11, 30, 3, 4, 56, 23, 12, 45];
// // console.log(`Initial array = ${arr.join(" - ")}`);

// var sortingAscending = function() {
//     // looping index
//     for (var i = 0; i < arr.length - 1; i++) {
//         // loopig data
//         for (var j = 0; j < arr.length - 1; j++) {
//             // bubble sort method
//             if (arr[j] > arr[j + 1]) {
//                 // higher element swap to temporary container
//                 var temp = arr[j];
//                 // fill in the gap previous index
//                 arr[j] = arr[j + 1];
//                 // swap back higher element from temp to array
//                 arr[j + 1] = temp;
//             }
//         }
//     console.log(`Sorting #${i + 1} = ${arr.join(" - ")}`);
//     }
// }


// // var array = [1, 2, 3, 4, 5, 6, 7, 8];

// // console.log(array.length);
// // console.log(array[7]);

// // SORTING DESCENDING BUBBLE METHOD
// // var arr = [3, 2, 35, 11, 22, 31, 16, 12, 9];
// console.log(`Initial array = ${arr.join(" - ")}`);
// console.log(arr.length);

// // var sortingDescending = function() {
// //     // looping index
// //     for (var i = 0; i < arr.length -1; i++) {
// //         // looping data
// //         for (var j = 0; j < arr.length - 1; j++) {
// //             // bs method
// //             if (arr[j] < arr[j + 1]) {
// //                 // lower element swap to temporary container
// //                 temp = arr[j];
// //                 // fill in the gap of previous array index
// //                 arr[j] = arr[j + 1];
// //                 // swap back lower element from temp to empty index in array
// //                 arr[j + 1] = temp;
// //             }
// //         }
// //     console.log(`Sorting #${i + 1} = ${arr.join(" - ")}`)
// //     }
// // }

// var sortingDescending = function() {
//     // looping index
//     for (var i = 0; i < arr.length -1; i++) {
//         // looping data
//         for (var j = 0; j < arr.length - 1; j++) {
//             // bs method
//             if (arr[j] < arr[j + 1]) {
//                 // swap smaller element to temp container
//                 temp = arr[j];
//                 // fill in the gap of previous index
//                 arr[j] = arr[j + 1];
//                 // swap back smaller element from temp to array
//                 arr[j + 1] = temp
//             }
//         }
//     console.log(`Sorting #${i + 1} = ${arr.join(" - ")}`)
//     }
// }


// // foo bar baz
// var input = prompt();
// // for ( var i = 1; i <= 100; i++) {
// //     if (i % 21 === 0) {
// //         console.log(`FooBar`);
// //     } else if (i % 3 === 0) {
// //         console.log("kelipatan 3");
// //     } else if (i % 7 === 0) {
// //         console.log("kelipatan 7");
// //     } else {
// //         console.log(i);
// //     }
// // }

// for (var i = 1; i <= input; i++) {
//     // i kelipatan 3 dan 5
//     if (i % 15 === 0) {
//         console.log("Hooray!");
//     } else if (i % 3 === 0) {
//         console.log("kelipatan 3");
//     } else if (i % 5 === 0) {
//         console.log("kelipatan 5");
//     } else {
//         console.log(i);
//     }
// }

// // ganjil genap
// function ganjilGenap (n) {
//     if (typeof(n) == 'number') {
//         if (n % 2 === 0) {
//             console.log("Genap");
//         } else {
//             console.log("Ganjil");
//         }
//     } else {
//         console.log("Bukan bilangan, masukan lagi!");
//     }
// }

// function ganjilGenap(n) {
//     if (typeof(n) == "number") {
//         if (n % 2 === 0) {
//             console.log("Genap");
//         } else {
//             console.log("Ganjil");
//         }
//     } else {
//         console.log("Bukan bilangan");
//     }
// }

// search
var data = [1, 2, 4, 5, 64, 22];
var search = 5;

var searching = function() {
    for (var i = 0; i < data.length; i++) {
        if (data[i] === search) {
            console.log(`Data ditemukan pada index #${i}`);
            break;
        } else {
            empty = i;
        }
    console.log(`Index #${empty} data tidak ditemukan`);
    }
}