//* DOM selection
const inputKeyword = document.querySelector(".input");
const tryButton = document.querySelector(".submit");

//* add event listener
inputKeyword.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    console.log(inputKeyword.value);
    isPalindrome(inputKeyword.value);
  }
});

tryButton.addEventListener("click", function () {
  console.log(inputKeyword.value);
  isPalindrome(inputKeyword.value);
});

// ! palindrome
const isPalindrome = (str) => {
  // * using array methods
  //   if (str !== str.split("").reverse().join("")) {
  //     return alert(`${str} is not a palindrome`);
  //   } else {
  //     alert(`Bingo! ${str} is a palindrome`);
  //   }

  // * using container for reverse elements
  //   let palindrome = "";

  //   for (let i = 0; i < str.length; i++) {
  //     palindrome += str[str.length - i - 1];
  //   }
  //   console.log(palindrome);

  //   if (palindrome !== str) {
  //     return alert(`${str} is not a palindrome`);
  //   } else {
  //   }

  // * using first vs last elements comparison
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return alert(`${str} is not a palindrome`);
    } else {
      return alert(`Bingo! ${str} is a palindrome`);
    }
  }
};

// ! reverse array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

function reverseArray(arr) {
  // * array method
  // return arr.reverse();
  // * looping using temporary container/array
  // for(let i = 0; i < arr.length / 2; i++) {
  //     let temp = arr[i];
  //     arr[i] = arr[arr.length - i - 1];
  //     arr[arr.length - i - 1] = temp;
  // }
  // return arr;
}

// console.log(reverseArray(arr));

// ! fibonacci
const calculateFibonacci = (num) => {
//   const arr = [0, 1];

//   for (let i = 2; i < num; i++) {
//     let a = arr[i - 2];
//     let b = arr[i - 1];
//     arr.push(a + b);
//   }
//   return arr;
};

// console.log(calculateFibonacci(13));