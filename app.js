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
//   { product: "shoes", quantity: "2", price: 500}, 
//   { product: "watches", quantity: "3", price: 1000},
//   { product: "bag", quantity: "1", price: 2000}, 
//   { product: "jeans", quantity: "1", price: 2500}, 
//   { product: "shirts", quantity: "2", price: 3000}, 
// ]

// let totalPrice = 0;
// for(let item of cart){
//   totalPrice += item.quantity * item.price;
// }
// console.log(`Total Price: ${totalPrice}`);

// cart.push({
//   product: "mobile",
//   quantity: 1,
//   price: 2000
// });
// console.log(cart);

// cart.splice(1,2);
// console.log(cart);

// const myName = "Kanwal";


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
};