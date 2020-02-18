export default {
  setNavigatorChosenId (state, id) {
    if (typeof id === 'number') {
      state.navigatorChosenId = id
    }
  }
}
