import { SET_THEME } from '../types';

const state = {
  theme: 'light-theme'
};

const actions = {
  [SET_THEME](context, theme) {
    context.commit(SET_THEME, theme);
  }
};

const mutations = {
  [SET_THEME](state, theme) {
    state.theme = `${theme}-theme`;
  }
};

export default {
  state,
  actions,
  mutations
};
