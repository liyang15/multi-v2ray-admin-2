import Vue from 'vue';
import Vuex, { Commit } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navIsCollapse: false,
  },
  mutations: {
    TOGGLE_NAV(state) {
      state.navIsCollapse = !state.navIsCollapse;
    },
  },
  actions: {
    toggleNav(ctx: {commit: Commit}) {
      ctx.commit('TOGGLE_NAV');
    },
  },
  getters: {
    navIsCollapse: state => state.navIsCollapse,
  },
});
