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

// // hoisting, scope, execution phase

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
//   var nama = "Fahrizal";
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

// // KeDa Tech: Programming Test
// // !Python
// // for x in range(1,101):
// //     if x % 15 == 0:
// //         print "FizzBuzz" # Catch multiples of both first.
// //     elif x % 3 == 0:
// //         print "Fizz"
// //     elif x % 5 == 0:
// //         print "Buzz"
// //     else:
// //         print x

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

// let beads = [1, 2, 3, 4, 5, 6, 7];

// beads.push(8, "end");
// beads.unshift("start");
// console.log(beads);
// beads.pop();
// console.log(beads);

// // SORTING ASCENDING BUBBLE METHOD
// var arr = [21, 11, 30, 3, 4, 56, 23, 12, 45];
// console.log(`Initial array = ${arr.join(" - ")}`);

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

// var array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.length);
// console.log(array[7]);

// // SORTING DESCENDING BUBBLE METHOD
// var arr = [3, 2, 35, 11, 22, 31, 16, 12, 9];
// console.log(`Initial array = ${arr.join(" - ")}`);
// console.log(arr.length);

// var sortingDescending = function() {
//     // looping index
//     for (var i = 0; i < arr.length -1; i++) {
//         // looping data
//         for (var j = 0; j < arr.length - 1; j++) {
//             // bs method
//             if (arr[j] < arr[j + 1]) {
//                 // lower element swap to temporary container
//                 temp = arr[j];
//                 // fill in the gap of previous array index
//                 arr[j] = arr[j + 1];
//                 // swap back lower element from temp to empty index in array
//                 arr[j + 1] = temp;
//             }
//         }
//     console.log(`Sorting #${i + 1} = ${arr.join(" - ")}`)
//     }
// }

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
// for ( var i = 1; i <= 100; i++) {
//     if (i % 21 === 0) {
//         console.log(`FooBar`);
//     } else if (i % 3 === 0) {
//         console.log("kelipatan 3");
//     } else if (i % 7 === 0) {
//         console.log("kelipatan 7");
//     } else {
//         console.log(i);
//     }
// }

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

// // search
// var data = [1, 2, 4, 5, 64, 22];
// var search = 64;

// var searching = function() {
//     for (var i = 0; i < data.length; i++) {
//         if (data[i] === search) {
//             console.log(`Data ditemukan pada index #${i}`);
//             break;
//         } else {
//             empty = i;
//         }
//     console.log(`Index #${empty} data tidak ditemukan`);
//     }
// }

// console.log(searching());

// function add(n) {
//   return 5 + n + 5;
// }

// let substract = (n) => 100 - 50 - n;

// console.log(add(5));

// console.log(add(1));

// substract(19);

// add(4);

// console.log(add(10));

// console.log(substract(12));

// console.log(substract(5));

// console.log(substract(-10));

// document.addEventListener("click", (e) => {
//     e.target;
//     console.log(e.target);
// });

// const genap = [10, 4, 6, 8, 10];
// const copyGenap = [...genap];
// genap[0] = 7;

// console.log(genap);
// console.log(copyGenap);

// const ganjil = [1, 3, 5, 7, 9];

// genap[0] = 5;
// const genapGanjil = [...ganjil, ...genap];

// console.log(genapGanjil)
// console.log(copyGenap);

// // fetch
// const searchButton = document.querySelector(".search-button");

// searchButton.addEventListener("click", function() {

//     const inputKeyword = document.querySelector(".input-keyword");

//     fetch('https://...' + inputKeyword.value)
//         .then(res => res.json())
//         .then(res => {

//             const movies = res.promisenyaApa;

//             let cards = "";
//             movies.forEach((m) => {
//                 cards += moviesContainerDiHtmlnya(m);
//             });

//             // select movies container
//             const moviesContainerDiHtmlnya = document.querySelector(".movies-container");
//             moviesContainerDiHtmlnya.innerHTML = cards;

//         })

// });

// const reverseArrayList = arrayList.map((arr) => {
//   [0];
// });

// console.log(reverseArrayList);
// const arrayList = ["a", "b", "c", "d", "e", "f"];
// console.log(arrayList);

// let arr = arrayList[0];
// let reverseArrayList = "";

// let a = function () {
//   for (i = 0; i < arrayList.length; i++) {
//     reverseArrayList += i++;
//   }
// };

// console.log(arr);
// console.log(reverseArrayList);
// console.log(a());

// let arrayList = ["a", "b", "c", "d", "e", "f"];

// for ( let i = arrayList.length - 1; i >= 0; i--) {
//     console.log(arrayList[i]);
// }

// for (let number of arrayList.reverse()) {
//   console.log(number);
// }

// // CREATE DATABASE pegawai;
// // USE pegawai;

// // CREATE TABLE managerial

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array.reverse());

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//! ///////////////// DANS MULTI PRO //////////////////////////
//* Prompt

//? onClick
// DOM selection try button from html
const tryButton = document.querySelector(".submit");
// DOM selection input box from html
const inputKeyword = document.querySelector(".input");
// add event listener when try button clicked
tryButton.addEventListener("click", function () {
      console.log(inputKeyword.value);
    //   isPalindrome(inputKeyword.value);
    fibonacci(inputKeyword.value);
});

//? press+enter
// add event listener when enter key pressed
inputKeyword.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    console.log(inputKeyword.value);
    // isPalindrome(inputKeyword.value);
    fibonacci(inputKeyword.value);
  }
});

//* /////////////////////////////////////////////////////////////

//* PALINDROME
const isPalindrome = (str) => {
  //? using for loop to compare full elements
    // //declare container variable
  // let palindrome = "";
    // //fill the container using reverse looping start from last index
  // for (let i = 0; i < str.length; i++) {
  //   palindrome += str[str.length - i - 1];
  // }
  // console.log(palindrome);
    // //compare between reverse container vs input
  // if (palindrome !== str) {
  //   alert(`${str} is not a palindrome!`);
  // } else {
  //   alert(`Bingo! ${str} is a palindrome.`);
  // }
  //? using for loop and index devide by 2 for efficacy, comparing  each element per index one by one
    // //str.length need to be devide by 2 bcz perfect-switch done when mid index reached, pass that point it will become meaningless bcz comparation already done and juzt consume computing time
  // for (let i = 0; i < str.length / 2; i++) {
        // //comparing elements at first and last index and keep moving toward the center if not stopped
  //   if (str[i] !== str[str.length - i - 1]) {
        // //not sure why return has same effect with break or false
  //     return alert(`${str} is not a palindrome!`);
  //   }
  // }
  // alert(`Bingo! ${str} is a palindrome.`);
  //? using array methods
        // //split method needs parameter for deviding point, if left with empty string means will be devide by every single elements. Join method is quite similar
  //   const palindrome = str.split("").reverse().join("");
        // //compare between reverse version vs original one
  //   if(palindrome !== str) {
  //       alert(`${str} is not a palindrome`);
  //   } else {
  //       alert(`Bingo! ${str} is a palindrome`);
  //   }
};

//* REVERSE ARRAY
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const str = ["satu", "dua", "tiga"];
// console.log(arr);

function reverseArray() {
  //? using array method
  // return arr.reverse();

  //? using for loop temp container
        // //index length need to be devide by 2, else it will repeat previous sequence when reach mid index
  //   for (let i = 0; i < arr.length / 2; i++) {
        // //initiate temp container and fill it with first index's element
  //     let temp = arr[i];
        // //empty first index filled with last index's element
  //     arr[i] = arr[arr.length - i - 1];
        // //current empty last index filled with element from initial first index that is keep temporarily in temp container/array
  //     arr[arr.length - i - 1] = temp;
  // console.log(arr)
  // }
        // //return array after switching process
  //   return arr;
}

// console.log(reverseArray(arr));
// console.log(arr);

//* FIBONACCI
function fibonacci(num) {
//   //? using for loop
    //initiate first two elements for starting point
  let arr = [0, 1];
    // i start from third index bcz first two index already initiated, else total length will be excess by 2 index from input parameter
  for (let i = 2; i < num; i++) {
    // select first index
    let a = arr[i - 2];
    // select second index
    let b = arr[i - 1];
    arr.push(a + b);
  }
  return arr;
}

console.log(fibonacci(10));
