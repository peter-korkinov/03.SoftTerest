import {showView, updateNavbar} from "../dom.js";
import {register} from "../api/data.js";
import {showHome} from "./home.js";
import {showLogin} from "./login.js";

const section = document.getElementById('register-page');
section.remove();

section.querySelector('#sign-in-from-register-view').addEventListener('click', (event) => {
  event.preventDefault();
  showLogin();
});

const form = section.querySelector('form');
form.addEventListener('submit', onRegister);

async function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const passwordRepeat = formData.get('input-repeat-password').trim();

  if (password !== passwordRepeat) {
    form.reset();

    return alert('Passwords do not match!');
  }

  await register(email, password);
  form.reset();
  showHome();
}

export function showRegister() {
  showView(section);
}