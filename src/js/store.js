const state = {}

module.exports = {
  setState (key, value) {
    state[key] = value
  },
  state () {
    return state
  }
}
