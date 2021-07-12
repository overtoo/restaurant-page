import page from "./modules/pages";
import quickDiv from "./modules/quickdiv";

let activePage = "home";

//build page
const menu = quickDiv.create("div#content", "div", "", "menu");
const homeTab = quickDiv.create("div.menu", "div", "home", "tab");
const aboutTab = quickDiv.create("div.menu", "div", "about", "tab");
const contactTab = quickDiv.create("div.menu", "div", "contact", "tab");
const inner = quickDiv.create("div#content", "div", "", "page");

//on page load
page.home();

//add tab functionality
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activePage = tab.textContent;
    display(activePage);
  });
});

function display(activePage) {
  quickDiv.clear("div.page");

  if (activePage == "home") {
    page.home();
  } else if (activePage == "about") {
    page.about();
  } else if (activePage == "contact") {
    page.contact();
  }
}
