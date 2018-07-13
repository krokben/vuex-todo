import axios from 'axios';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, FETCH_TODOS } from '../types';

const state = [];

export const getters = {
  completedTodos: state => state.filter(todo => todo.completed),
  remainingTodos: state => state.filter(todo => !todo.completed)
};

export const actions = {
  [ADD_TODO](context, todo) {
    axios.post(`http://localhost:3000/todos`, todo)
      .then(response => context.commit(ADD_TODO, todo))
      .catch(error => console.log(error));
  },
  [COMPLETE_TODO](context, payload) {
    axios.put(`http://localhost:3000/todos/${payload.id}`, { changes: payload.changes })
      .then(response => context.commit(COMPLETE_TODO, payload.id))
      .catch(error => console.log(error));
  },
  [DELETE_TODO](context, payload) {
    axios.delete(`http://localhost:3000/todos/${payload.id}`)
      .then(response => context.commit(DELETE_TODO, payload.id))
      .catch(error => console.log(error));
  },
  [FETCH_TODOS](context) {
    axios.get(`http://localhost:3000/todos`)
      .then(response => context.commit(FETCH_TODOS, response.data))
      .catch(error => console.log(error));
  },
};

export const mutations = {
  [ADD_TODO](state, todo) {
    state.push(todo);
  },
  [COMPLETE_TODO](state, id) {
    const todo = state.find(todo => todo._id === id);
    todo.completed = !todo.completed;
  },
  [DELETE_TODO](state, id) {
    const idx = state.indexOf(state.find(todo => todo._id === id));
    state.splice(idx, 1);
  },
  [FETCH_TODOS](state, todos) {
    todos.forEach(todo => state.push(todo));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
