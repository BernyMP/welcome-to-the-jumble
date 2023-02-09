"use strict";

// Selecting elements
const updateGrid = document.querySelector(".updateGrid");
const textCaesar = document.querySelector(".textCaesar");
const textSquare = document.querySelector(".textSquare");

const abc = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
};

const getRandomNum = () => {
  return Math.floor(Math.random() * 25) + 1;
};

updateGrid.addEventListener("click", function () {
  let mySet = new Set();
  for (let i = 1; i <= 25; i++) {
    let num = getRandomNum();
    while (mySet.has(num)) {
      num = getRandomNum();
    }
    mySet.add(num);
    document.querySelector(`.letter-${i}`).textContent = abc[num].toUpperCase();
  }
});
