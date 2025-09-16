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
//         count++;
//     }
// return inner;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

const modelForm = document.getElementById("modelForm");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const menu = document.getElementById("menu");
const barBtn = document.getElementById("barBtn");

const toggleFormModel = () => {
!modelForm.classList.remove("hidden");
}

const toggleMenu = () => {
    menu.classList.toggle("h-0");
    menu.classList.toggle("h-[110px]");
};

const openSignupForm = () => {
loginForm.classList.add("hidden");
signupForm.classList.remove("hidden");
}

const openLoginForm = () => {
loginForm.classList.remove("hidden");
signupForm.classList.add("hidden");
}


loginBtn.addEventListener("click",openLoginForm);
signupBtn.addEventListener("click",openSignupForm);
barBtn.addEventListener("click",toggleMenu);