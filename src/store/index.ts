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
    },
    latestSearchTerms: state => {
      return state.searchTerms.slice(state.searchTerms.length-10, state.searchTerms.length)
    }
  },
  mutations: {
    //mutating the state
    //mutations are always synchronous
    searched(state, searchTerm: string) {
      if (state.searchTerms[state.searchTerms.length - 1] !== searchTerm) {
        state.searchTerms.push(searchTerm);
      }
    }
  },
  actions: {
    //commits the mutation, it's asynchronous
  },
  modules: {
  },
});
