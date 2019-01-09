const state = require('./store.js').state

module.exports.createCards = function () {
  const parent = document.createElement('div')
  parent.setAttribute('class', 'cards')

  const cards = state().cards

  cards.forEach((card, i) => {
    const cardDiv = document.createElement('div')
    cardDiv.setAttribute('class', 'card')
    cardDiv.setAttribute('id', card.name.toLowerCase())
    cardDiv.setAttribute('style', 'background-color: ' + card.cardColors.bg + '; color:' + card.cardColors.text)

    const next = document.createElement('div')
    next.setAttribute('class', 'next')
    next.setAttribute('style', 'background-color: ' + card.cardColors.textbg)
    next.innerText = cards[i].tag

    const name = document.createElement('div')
    name.setAttribute('class', 'name')
    name.innerText = card.name

    const description = document.createElement('div')
    description.innerText = card.description

    const desc = document.createElement('div')
    desc.appendChild(name)
    desc.appendChild(description)
    desc.setAttribute('class', 'desc')
    desc.setAttribute('style', 'background-color: ' + card.cardColors.textbg)

    const imgSpan = document.createElement('div')
    imgSpan.setAttribute('class', 'img')
    const img = document.createElement('img')
    img.setAttribute('src', card.sprite)
    img.setAttribute('style', 'background-color: ' + card.cardColors.imgbg)
    imgSpan.appendChild(img)

    cardDiv.appendChild(next)
    cardDiv.appendChild(desc)
    cardDiv.appendChild(imgSpan)

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'card-wrapper')
    wrapper.appendChild(cardDiv)

    parent.appendChild(wrapper)

  })

  return parent
}
