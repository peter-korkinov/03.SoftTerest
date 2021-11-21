import {showHome} from "./views/home.js";
import {showLogin} from "./views/login.js";
import {showRegister} from "./views/register.js";
import {logout} from "./api/data.js";
import {showCreate} from "./views/create.js";
import {showDashboard} from "./views/catalog.js";

showHome();

document.querySelector('#navbar').addEventListener('click', onNavigate);

const navViews = {
  'nav-logo': showHome,
  'nav-dashboard': showDashboard,
  'nav-create': showCreate,
  'nav-logout': onLogout,
  'nav-login': showLogin,
  'nav-register': showRegister
}

function onNavigate(event) {
  event.preventDefault();

  const view = navViews[event.target.id];
  if (typeof view === 'function') {
    event.preventDefault();
    view();
  }
}

async function onLogout() {
  await logout();
  showHome();
}