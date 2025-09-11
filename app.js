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

const menu = document.getElementById("menu");
const barBtn = document.getElementById("barBtn");

const toggleMenu = () => {
    menu.classList.toggle("h-0");
    menu.classList.toggle("h-[110px]");
};



barBtn.addEventListener("click",toggleMenu);