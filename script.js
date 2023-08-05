/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js";
console.log("old data ------>", data);
import CardList from "./components/CardList.js";

const author = {
  author: "Steve Nyaga",
  authorsUrl: "https://nyaga.com",
};

// spread syntax ...

const newData = data.map((imgData) => {
  const newImgData = { ...imgData, ...author };
  return newImgData;
});
console.log("New Data ----->", newData);

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = CardList(newData);

// Dark to Light toggle
const toggle = document.querySelector(".toggle");
const modeColor = document.documentElement;

const displayModeOnLoad = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefer-color-scheme: dark)").matches
  ) {
    modeColor.classList.add("dark");
  } else {
    modeColor.classList.add("light");
  }
};

displayModeOnLoad();

// function
const toggleMode = () => {
  if (toggle.getAttribute("aria-pressed") === "true") {
    toggle.removeAttribute("aria-pressed");
  } else {
    toggle.setAttribute("aria-pressed", "true");
  }
  modeColor.classList.toggle("dark");
  modeColor.classList.toggle("light");
};

// Using the function.
toggle.addEventListener("click", () => toggleMode());
