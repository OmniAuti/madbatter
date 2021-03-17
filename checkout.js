//LOCAL STORAGE ITEMS FOR CART

var cartItemArrName = JSON.parse(localStorage.getItem('name'))
var cartItemArrAddi = JSON.parse(localStorage.getItem('additions'))
var cartItemArrPrice = JSON.parse(localStorage.getItem('price'))
var cartItemNum = JSON.parse(localStorage.getItem('itemNum'))


// LOAD LOCAL STORAGE & CREATE CART ITEMS

const cart = document.querySelector('.cart')

function createCart() {

        for (let idx = 0; idx < cartItemArrName.length; idx++) {

        const cartItem = document.createElement('div')
            cartItem.classList.add('cart-items-cont')
                cartItem.innerHTML = `
                <div class="cart-item-info">
                <h3 class="cart-item-name">${cartItemArrName[idx]}</h3>
                <span class="cart-item-additions">${cartItemArrAddi[idx]}</span>
                </div>


                <h3 class="num-main-order" id="num-main-order"><span>&times;</span>${cartItemNum[idx]}</h3>

                
                <div class="cart-cont-cont-p">
                <h3 class='cart-item-price'>${cartItemArrPrice[idx]}</h3>
                </div>
                <i class="fas fa-trash cart-one-item-remove"></i>
                `
                cart.appendChild(cartItem)
            }
}

//// LOAD CART IN ON PAGE LOAD

document.addEventListener('DOMContentLoaded', createCart);

/// REMOVE ONE ITEM BUTTON

cart.addEventListener('click', function(e) {

    if (e.target.classList.contains('cart-one-item-remove')) {  
        const reducePriceString = e.target.previousElementSibling.innerText.slice(1)
        const slicedTotal = finalPriceOne.innerText.slice(1)
        const reducePriceNum = Number(reducePriceString)
        const totalNum = Number(slicedTotal)
        const newTotalString = `$${totalNum - reducePriceNum}`

        const slicedTotalNew = newTotalString.slice(1)
        const totalNewNum = Number(slicedTotalNew)
        finalPriceOne.innerText = `$${totalNewNum.toFixed(2)}`

       e.target.parentElement.remove()
        
      
    } 
    
    if (cart.children.length  <= 0) {
        cart.innerHTML =   `<h2 class="empty-cart-text">Cart Is Empty</h2>`
    } 
})

/// REMOVE ALL BUTTON

const removeAll = document.getElementById('cart-item-remove')

removeAll.addEventListener('click', () => {
    cart.innerHTML = `<h2 class="empty-cart-text">Cart Is Empty</h2>`
    finalPriceOne.innerText = '$0.00'
})



///// CART PRICES

const finalPriceOne = document.querySelector('.final-cart-price-one')

let arrOne = cartItemArrPrice.map(arr => arr.slice(1))
    let arrTwo = arrOne.map(Number)
    let arrThree = arrTwo.reduce((a, b) => a + b, 0)
    
finalPriceOne.innerText = `$${arrThree.toFixed(2)}`

// remove button = reduce price