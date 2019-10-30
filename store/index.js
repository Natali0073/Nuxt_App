// export const state = () => ({
//   token: null
// });
//
// export const mutations = {
//   setToken(state, token) {
//     console.log('setToken');
//     state.token = token
//   },
//   clearToken(state) {
//     state.token = null
//   }
// };
//
// export const actions = {
//   nuxtServerInit({dispatch}) {
//     console.log('nuxtServerInit')
//   },
//   login({commit}) {
//     console.log('login');
//     commit('setToken', 'truetoken')
//   },
//   logout({commit}) {
//     commit('clearToken')
//   },
// };
//
// export const getters = {
//   hasToken: s => !!s.token
// };

export const state = () => ({
  blogPosts: [],
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
  let files = await require.context('~/assets/content/blog/', false, /\.json$/);
  let blogPosts = files.keys().map(key => {
      let res = files(key);
  res.slug = key.slice(2, -5);
  return res;
});
  await commit('setBlogPosts', blogPosts);
},
};
