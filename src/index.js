import "./styles.css";
import { LoadInitialContent } from "./page-load";
import { Menu } from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  LoadInitialContent();

  const showMenu = document.querySelector("#menu");
  showMenu.addEventListener("click", () => {
    const pageload = document.querySelector("#content");
    pageload.innerHTML = ""
    Menu();
  });
});
