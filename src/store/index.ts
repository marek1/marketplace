import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  searchTerms: string[];
}

const initalState: State = {
  searchTerms: []
};

export default new Vuex.Store({
  state: initalState,
  getters: {
    lastSearchTerm: state => {
      return state.searchTerms[state.searchTerms.length - 1] || '';
    }
  },
  mutations: {
    //mutating the state
    //mutations are always synchronous
    searched(state, searchTerm: string) {
      state.searchTerms.push(searchTerm);
    }
  },
  actions: {
    //commits the mutation, it's asynchronous
  },
  modules: {
  },
});
