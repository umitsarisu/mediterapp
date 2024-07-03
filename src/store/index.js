import { createStore } from 'vuex';
const store = createStore({
  state: {
    spareParts: [],
    activeButton: "",
    selectedParts: []
  },
  getters: {
    getActiveButton(state) {
      return state.activeButton
    },
  },
  mutations: {
    setActiveButton(state, payload) {
      state.activeButton = payload
    },
    setSelectedParts(state, payload) {
      state.selectedParts.push(payload)
    },
    deletePart(state, payload) {
      const index = state.selectedParts.findIndex(item.id == payload.id)
      state.selectedParts.splice(index, 1)
    },
    setSpareParts(state, payload) {
      state.spareParts = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store