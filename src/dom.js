// elements of navbar
const logo = document.getElementById('nav-logo');
const dashboardBtn = document.getElementById('nav-dashboard');
const createBtn = document.getElementById('nav-create');
const logoutBtn = document.getElementById('nav-logout');
const loginBtn = document.getElementById('nav-login');
const registerBtn = document.getElementById('nav-register');

function updateNavbar() {
  if(isUserLogged()) {
    createBtn.style.display = '';
    logoutBtn.style.display = '';
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
  } else {
    createBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
    loginBtn.style.display = '';
    registerBtn.style.display = '';
  }
}

// element for the content currently displayed
const main = document.querySelector('main');

// when called accepts a view as argument and
// replaces the contents of the main element with it
function showView(section) {
  main.replaceChildren(section);
}

// returns boolean value of whether a user is logged
// by looking for userData in session storage
function isUserLogged() {
  return !(sessionStorage.getItem('userData') == null);
}

// gets user data from session storage
function getUserData() {
  if (isUserLogged()) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    return {
      id: () => userData.id,
      email: () => userData.email,
      token: () => userData.token
    }
  }
  return 0;
}

export {
  showView,
  isUserLogged,
  getUserData,
  updateNavbar
}