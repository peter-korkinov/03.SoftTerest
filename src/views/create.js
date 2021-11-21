import {showView} from "../dom.js";
import {createIdea} from "../api/data.js";
import {showDashboard} from "./catalog.js";

const section = document.getElementById('create-page');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onCreate);

async function onCreate(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('image-url');

  await createIdea({title, description, img});
  form.reset();
  showDashboard();
}

export function showCreate() {
  showView(section);
}