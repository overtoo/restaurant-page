

import { page } from "./modules/pages";
import { clearDiv, createDiv } from "./modules/quickdiv";

let activePage = "home";

//build page
const menu = createDiv("div#content", "div", "", "menu");
const homeTab = createDiv("div.menu", "div", "home", "tab");
const aboutTab = createDiv("div.menu", "div", "about", "tab");
const contactTab = createDiv("div.menu", "div", "contact", "tab");
// const page = createDiv("div#content", "div", "", "page");

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activePage = tab.textContent;
    display(activePage);
  });
});

function display(activePage) {
  clearDiv("div.page");
  if (activePage == "home") {
    console.log(page);
    // page.home();
  } else if (activePage == "about") {
    page.about();
  } else if (activePage == "contact") {
    page.contact();
  }
}

//on page load
// displayHome();

// function displayHome() {
//   clearDiv("div.page");
//   home();
//   homeBtn.classList.add("active");
// }

// function displayAbout() {
//   clearDiv("div.page");
//   about();
//   homeBtn.classList.add("active");
// }

// function displayContact() {
//   clearDiv("div.page");
//   contact();
// }
