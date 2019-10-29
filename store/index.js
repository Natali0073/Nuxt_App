export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    console.log('setToken');
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
};

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')
  },
  login({commit}) {
    console.log('login');
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  },
};

export const getters = {
  hasToken: s => !!s.token
};
