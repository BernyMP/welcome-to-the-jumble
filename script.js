"use strict";

// Selecting HTML elements
const updateGrid = document.querySelector(".updateGrid");
const textCaesar = document.querySelector(".textCaesar");
const textSquare = document.querySelector(".textSquare");
const scrollBar = document.getElementById("scrollNum");
const scrollBarNum = document.querySelector(".scrollBarNum");
const textInput = document.querySelector(".textInput");

// Dictionaries
const abc = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};
const abcKeyValueReverse = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

// Functions

// getRandomNum returns a random int between 0-25 with 0 and 25 being inclusive
const getRandomNum = () => {
  return Math.floor(Math.random() * 25) + 1;
};

// newCharCaesar returns the new position of the letter based on actual position
// and the encryptionNumber based on the range scrollbar value
const newCharCaesar = (char, encryptionNum) => {
  const newIndex = (abcKeyValueReverse[char] + parseInt(encryptionNum)) % 26;
  return abc[newIndex];
};

// encryptionCaesar returns the new string encrypted with the help of helper method
// newCharCaesar
const encryptionCaesar = (strInput, encryptionNum) => {
  const arrStrInput = strInput.split("");
  let encryptedStr = "";
  arrStrInput.forEach((char) => {
    if (/^[a-zA-Z]+$/.test(char)) {
      encryptedStr += newCharCaesar(char, encryptionNum);
    } else {
      encryptedStr += char;
    }
  });
  return encryptedStr.toUpperCase();
};

const encryptionSquare = (strInput) => {
  const arrStrInput = strInput.split("");
  let encryptedStr = "";
  arrStrInput.forEach((char) => {
    let originalIndex = abcKeyValueReverse[char];
    let currentIndex = "letter-" + originalIndex.to;
  });
  return encryptedStr;
};

updateGrid.addEventListener("click", function () {
  let squareCipherStr = "";
  let mySet = new Set();
  for (let i = 0; i <= 24; i++) {
    let num = getRandomNum();
    while (mySet.has(num)) {
      num = getRandomNum();
    }
    mySet.add(num);
    document.querySelector(`.letter-${i}`).textContent = abc[num].toUpperCase();
  }
});

scrollBar.addEventListener("input", function () {
  scrollBarNum.textContent = scrollBar.value;
  textCaesar.textContent = encryptionCaesar(textInput.value, scrollBar.value);
});

textInput.addEventListener("input", function () {
  textCaesar.textContent = encryptionCaesar(textInput.value, scrollBar.value);
  textSquare.textContent = encryptionSquare(textInput.value);
});
