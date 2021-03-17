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

        // adding new total
        const slicedTotalNew = newTotalString.slice(1)
        const totalNewNum = Number(slicedTotalNew)
        finalPriceOne.innerText = `$${totalNewNum.toFixed(2)}`

            // tax adjustment
            let tax = 0.1025
            let sliceTotal = finalPriceOne.innerText.slice(1)
            let priceTotalOne = Number(sliceTotal)
            let adjustedTax = `${priceTotalOne * tax}`
            let adjustedTaxNum = Number(adjustedTax)
            taxPrice.innerText = `$${adjustedTaxNum.toFixed(2)}`

            // tip adjustment 
            if (noTip.classList.contains('tip-active')) {
                tipPrice.innerText = '$0.00'
            } else if (tenTip.classList.contains('tip-active')) {
                let tip = priceTotalOne * 0.10
                tipPrice.innerText = `$${tip.toFixed(2)}`
            } else if (fifTip.classList.contains('tip-active')) {
                let tip = priceTotalOne * 0.15
                tipPrice.innerText = `$${tip.toFixed(2)}`
            } else if (tweTip.classList.contains('tip-active')) {
                let tip = priceTotalOne * 0.20
                tipPrice.innerText = `$${tip.toFixed(2)}` 
            }

            e.target.parentElement.remove()
        
        } 
        
    if (cart.children.length  <= 0) {
        cart.innerHTML =   `<h2 class="empty-cart-text">Cart Is Empty</h2>`
        removeActiveTip()
        noTip.classList.add('tip-active')
        tenTip.disabled = true
        fifTip.disabled = true
        tweTip.disabled = true
    } 
})

/// REMOVE ALL BUTTON

const removeAll = document.getElementById('cart-item-remove')

removeAll.addEventListener('click', () => {
    cart.innerHTML = `<h2 class="empty-cart-text">Cart Is Empty</h2>`
    finalPriceOne.innerText = '$0.00'
    taxPrice.innerText = '$0.00'
    removeActiveTip()
    noTip.classList.add('tip-active')
    tipPrice.innerText = '$0.00'
    tenTip.disabled = true
    fifTip.disabled = true
    tweTip.disabled = true
})



///// CART PRICES

const finalPriceOne = document.querySelector('.final-cart-price-one')

let arrOne = cartItemArrPrice.map(arr => arr.slice(1))
    let arrTwo = arrOne.map(Number)
    let arrThree = arrTwo.reduce((a, b) => a + b, 0)
    
finalPriceOne.innerText = `$${arrThree.toFixed(2)}`

// adding taxes

const taxPrice = document.querySelector('.tax-price')

let tax = 0.0625
let sliceTotal = finalPriceOne.innerText.slice(1)
let priceTotalOne = Number(sliceTotal)
let adjustedTax = `${priceTotalOne * tax}`
let adjustedTaxNum = Number(adjustedTax)
taxPrice.innerText = `$${adjustedTaxNum.toFixed(2)}`



//// TIP BUTTONS

const tipPrice = document.querySelector('.tip-price')

const noTip = document.querySelector('.tip-no')
const tenTip = document.querySelector('.tip-ten')
const fifTip = document.querySelector('.tip-fif')
const tweTip = document.querySelector('.tip-twe')

const tipBtn = document.querySelectorAll('.tip-btn')

tipBtn.forEach(btn => {
 btn.addEventListener('click', () => {
     removeActiveTip()
     btn.classList.add('tip-active')

     if (noTip.classList.contains('tip-active')) {
        tipPrice.innerText = '$0.00'
    } else if (tenTip.classList.contains('tip-active')) {
        let tip = priceTotalOne * 0.10
        tipPrice.innerText = `$${tip.toFixed(2)}`
    } else if (fifTip.classList.contains('tip-active')) {
        let tip = priceTotalOne * 0.15
        tipPrice.innerText = `$${tip.toFixed(2)}`
    } else if (tweTip.classList.contains('tip-active')) {
        let tip = priceTotalOne * 0.20
        tipPrice.innerText = `$${tip.toFixed(2)}`    }
 })
})

function removeActiveTip() {
    tipBtn.forEach(btn => {
        btn.classList.remove('tip-active')
    })
}
