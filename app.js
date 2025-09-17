// const findWord = (words,word) => {
// let a = words.includes(word);
// console.log(a);
// }
// findWord(["on","of","oh"],"off");

// const palindromeWords = (word) => {
// let ulta = word.split("").reverse().join("");
// console.log(ulta == word);
// }
// palindromeWords("mam");

// const createCounter = () => {
//     let count = 0;
//     const inner = () => {
//        return ++count;
//     }
// return inner;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const cart = [
//   { product: "shoes", quantity: 1 , price: 1000},
//   { product: "watches", quantity: 1 , price: 1000},
//   { product: "bag", quantity: 1 , price: 1000},
//   { product: "jeans", quantity: 2 , price: 1000},
//   { product: "shirts", quantity: 1 , price: 1000},
// ];

// let totalPrice = cart.reduce((a,c)=>a+(c.price*c.quantity),0);
// console.log(totalPrice);

// let totalPrice = 0;
// for(let item of cart){
//   totalPrice += item.quantity * item.price;
// };
// console.log(totalPrice);

// cart.push({
//   product: "mobile",
//   quantity: 1,
//   price: 2000
// });
// console.log(cart);

// cart.splice(1,2);
// console.log(cart);

// const nums = [1,2,3,4];
// const sum = nums.reduce((a,c)=>a+c,0);
// console.log(sum);

// let myReverse = (word) => {
//   let newWord = "";
//  for (let i = word.length-1; i >= 0; i--){
//    newWord+= word[i];
//  }
//  return newWord;
// }
// let ulta = myReverse("hellow");
// let ulta2 = myReverse("enum");
// console.log(ulta2);

const modelForm = document.getElementById("modelForm");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const menu = document.getElementById("menu");
const barBtn = document.getElementById("barBtn");
const userFormBtn = document.getElementsByClassName("userForm");
const toggleFormModel = () => {
  modelForm.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");
};

const toggleMenu = () => {
  menu.classList.toggle("h-0");
  menu.classList.toggle("h-[110px]");
};

const openSignupForm = () => {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
};

const openLoginForm = () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

loginBtn.addEventListener("click", openLoginForm);
signupBtn.addEventListener("click", openSignupForm);
barBtn.addEventListener("click", toggleMenu);
modelForm.addEventListener("click", toggleFormModel);

for (let btn of userFormBtn) {
  btn.addEventListener("click", toggleFormModel);
}
