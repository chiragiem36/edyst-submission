const xhr = require('./js/xhr.js')
const store = require('./js/store.js')
const state = store.state()

window.onload = () => {
  const options = {
    url: "https://dev-util.edyst.com/challenge/pokemons/random"
  }
  xhr.get(options)
  .then((res) => {
    store.setState('cards', res.body)
  })
  .then(() => {
    const parent = createCards()
    document.getElementById('app').appendChild(parent)
  })
}
