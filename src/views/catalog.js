import {html, render} from 'https://unpkg.com/lit-html?module';

import {getUserData, showView} from "../dom.js";
import {deleteIdeaById, getAllIdeas, getIdeaById} from "../api/data.js";

const detailsView = document.getElementById('details-page');
detailsView.remove();

const section = document.getElementById('dashboard-holder');
section.remove();

const ideaCardTemplate = (onDetails, data) => html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${data.title}</p>
        </div>
        <img class="card-image" src="${data.img}" alt="Card image cap">
        <a @click="${onDetails}" id="${data._id}" class="btn" href="javascript:void(0)">Details</a>
    </div>
`;

const ideaDetailsTemplate = (onDelete, data) => html`
    <img class="det-img" src="${data.img}" />
    <div class="desc">
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>
    </div>
    ${ 
      data._ownerId === getUserData().id() ?
      html`<div class="text-center"><a @click="${onDelete}" id="${data._id}" class="btn detb" href="">Delete</a></div>` : 
      html`<div></div>`
    }
`

async function renderAllIdeas() {
  const ideas = await getAllIdeas();
  let result;

  if(Object.keys(ideas).length === 0) {
    result = html`<h1>No ideas yet! Be the first one :)</h1>`;
  } else {
    result = ideas.map(a => ideaCardTemplate(onDetails.bind(null, a), a));
  }

  render(result, section);
}

function onDetails(idea, event) {
  event.preventDefault();
  const id = event.target.id
  showDetails(id);
}

async function onDelete(event) {
  event.preventDefault();

  await deleteIdeaById(event.target.id);
  showDashboard();
}

async function renderIdea(id) {
  const idea = await getIdeaById(id);

  const result = ideaDetailsTemplate(onDelete.bind(), idea);
  render(result, detailsView);
}

export async function showDashboard() {
  await renderAllIdeas();
  showView(section);
}

async function showDetails(id) {
  await renderIdea(id);
  showView(detailsView);
}