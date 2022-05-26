import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    width: 0,
    // 'rus', 'eng'
    lang: 'rus'
  }),
  getters: {
    // 'xs', 'md', 'lg'
    screenMode(state) {
      if (state.width < 730) return 'xs'
      if (state.width >= 730 && state.width < 1380) return 'md'
      if (state.width >= 1380) return 'lg'
    },
    compact(state, getters) {
      return getters.screenMode === 'xs'
    }
  },
  mutations: {
    setWidth(state, width) {
      state.width = width
    },
    changeLang(state) {
      state.lang = state.lang === 'rus' ? 'eng' : 'rus'
    }
  },
})
