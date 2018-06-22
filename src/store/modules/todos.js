import { ADD_TODO, COMPLETE_TODO } from '../types';

const state = [
  {id: 1, name: 'First Todo', completed: false},
  {id: 2, name: 'Second Todo', completed: false},
  {id: 3, name: 'Third Todo', completed: true}
];

const actions = {
  [ADD_TODO](context, todo) {
    context.commit(ADD_TODO, todo);
  },
  [COMPLETE_TODO](context, id) {
    context.commit(COMPLETE_TODO, id);
  }
};

const mutations = {
  [ADD_TODO](state, todo) {
    state.push(todo)
  },
  [COMPLETE_TODO](state, id) {
    const idx = state.findIndex(todo => todo.id === id);
    state[idx] = { ...state[idx], completed: !state[idx].completed }
  }
};

export default {
  state,
  actions,
  mutations
};
