// import { products } from './data/products.js'
const { products } = require('./data/products.js')

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputBox = document.querySelector('input')
    inputBox.addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = () => {
    const inputBox = document.querySelector('input')

    const userKeyword = inputBox.value

    const arrayFound = items.filter((item) => {
      return item.keywords.toLowerCase().includes(userKeyword.toLowerCase())
    })
    console.log(arrayFound)
    showItems(arrayFound)
  }

  const showItems = (items) => {
    const ulParent = document.getElementById('items')
    ulParent.innerHTML = ''

    items.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`

      ulParent.appendChild(li)
    })
  }

  return { initialPage, filterItemsHandler, showItems }
}

// export { itemList }
module.exports = itemList

const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
