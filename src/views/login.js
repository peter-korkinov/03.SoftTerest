import {showRegister} from "./register.js";
import {login} from "../api/data.js";
import {showHome} from "./home.js";
import {showView, updateNavbar} from "../dom.js";

const section = document.querySelector('#login-page');
section.remove();

section.querySelector('#register-from-login-page').addEventListener('click', (event) => {
  event.preventDefault();
  showRegister();
});

// const form = section.querySelector('#login-page form');
// section.querySelector('#login-btn').addEventListener('click', onLogin);

const form = section.querySelector('form');
form.addEventListener('submit', onLogin);

async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  await login(email, password);
  form.reset();
  showHome(); // da se prehvyrli kym app modula moje bi??? (i pri register) (goto ???)
}

export function showLogin() {
  showView(section);
}

