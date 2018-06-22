import { ADD_TODO } from '../types';

const state = [
  {id: 1, name: 'First Todo', completed: false},
  {id: 2, name: 'Second Todo', completed: false},
  {id: 3, name: 'Third Todo', completed: true}
];

const actions = {
  [ADD_TODO](context, todo) {
    context.commit(ADD_TODO, todo);
  }
};

const mutations = {
  [ADD_TODO](state, todo) {
    state.push(todo)
  }
};

export default {
  state,
  actions,
  mutations
};
