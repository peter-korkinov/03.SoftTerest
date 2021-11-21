import * as api from './api.js'

const login = api.login;
const register = api.register;
const logout = api.logout;

const endpoints = {
  allIdeas: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
  idea: '/data/ideas/'
}

async function getAllIdeas() {
  return api.get(endpoints.allIdeas);
}

async function getIdeaById(id) {
  return api.get(endpoints.idea + id);
}

async function createIdea(data) {
  return api.post(endpoints.idea, data);
}

async function deleteIdeaById(id) {
  return api.del(endpoints.idea + id);
}

export {
  login,
  register,
  logout,
  getAllIdeas,
  getIdeaById,
  createIdea,
  deleteIdeaById
}