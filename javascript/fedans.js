// ! DOM selection
const inputKeyword = document.querySelector(".input");
const tryButton = document.querySelector(".submit");

// * add event listener
inputKeyword.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    // console.log(inputKeyword.value);
    isPalindrome(inputKeyword.value);
  }
});

tryButton.addEventListener("click", function () {
  // console.log(inputKeyword.value);
  isPalindrome(inputKeyword.value);
});

// ! palindrome
const isPalindrome = (str) => {
  // *array methods
  // let palindrome = "";
  // palindrome = str.split("").reverse().join("");
  // if (str !== palindrome) {
  //   return alert(palindrome);
  // }

  // * for loop
  let palindrome = "";
  for (let i = 0; i < str.length; i++) {
    palindrome += str[str.length - i - 1];
  }

  return console.log(palindrome.toUpperCase());
};
