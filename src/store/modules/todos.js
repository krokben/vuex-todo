import { ADD_TODO, COMPLETE_TODO } from '../types';

const state = [
  {id: 1, name: 'First Todo', completed: false},
  {id: 2, name: 'Second Todo', completed: false},
  {id: 3, name: 'Third Todo', completed: true}
];

const getters = {
  completedTodos: state => state.filter(todo => todo.completed),
  remainingTodos: state => state.filter(todo => !todo.completed)
};

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
    const todo = state.find(todo => todo.id === id);
    todo.completed = !todo.completed;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
