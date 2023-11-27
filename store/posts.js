export const state = () => ({
    error: null,
    posts: null,
});

export const getters = {
    posts(state) {
        return state.posts
    },



    error(state) {
        return state.error
    }
}

export const mutations = {
    SAVE_POSTS(state, posts) {
        state.posts = posts;
    },
};

export const actions = {
    setPosts({ commit }, list) {
        commit("SAVE_POSTS", list);
    },
};