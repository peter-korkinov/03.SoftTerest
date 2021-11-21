import {isUserLogged, showView, updateNavbar} from "../dom.js";
import {showRegister} from "./register.js";
import {showCreate} from "./create.js";

const section = document.getElementById('home-page');
section.remove();

section.querySelector('#get-started-btn').addEventListener('click', (event) => {
  event.preventDefault();
  if(isUserLogged()) {
    showCreate();
  } else {
    showRegister();
  }
});

export async function showHome() {
  showView(section);
  updateNavbar();
}