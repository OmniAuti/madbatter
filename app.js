// NAV BAR FUNCTION

const nav = document.querySelector('nav')
const hr = document.querySelector('hr')

//NAV BAR SCROLL FEATURE
window.addEventListener('scroll', () => {
    const navTop = nav.getBoundingClientRect()
   if (navTop.top === 0) {
       hr.style.display = 'none'
       nav.style.borderColor = '#000'
       nav.style.backgroundColor = '#fff'
    } else {
        hr.style.display = 'block'
        nav.style.borderColor = 'transparent'
        nav.style.backgroundColor = '#f7f7f7'
   }
})

// MODAL FUNCTION

const modal = document.getElementById('modal')
const modalOpen = document.querySelectorAll('#modal-open')
const modalClose = document.getElementById('closeBtn')
const modalContent = document.querySelector('.modal-item-info')
const totalModalPrice = document.querySelector('.final-total-modal')


for (const modalOpens of modalOpen) {
    modalOpens.addEventListener('click', opensModal)
}

modalClose.addEventListener('click', closesModal)

modal.addEventListener('click', outsideModalClick)


function opensModal() {
    modal.style.display = 'block'
    modalMainItemSubtract.disabled = true
}


const freeChecked = document.querySelectorAll('.free-checked')
const mapleDefault = document.getElementById('maple')

 function closesModal() {
    modal.style.display = 'none'
    totalModalPrice.innerText = ''
    modalMainItemNum.value = 1
    mainOrderNum = 1
    storedTotal = []
    toCartArr = []
    exStorage = [] 

    for (const checkedbox of checkbox) {
        checkedbox.checked = false
    }
    for (const freeCheck of freeChecked) {
        freeCheck.checked = false
    }
        mapleDefault.checked = true
 }

function outsideModalClick(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
        totalModalPrice.innerText = ''
        modalMainItemNum.value = 1
        mainOrderNum = 1
        storedTotal = []
        toCartArr = []
        exStorage = []
    
        for (const checkedbox of checkbox) {
            checkedbox.checked = false
        }
        for (const freeCheck of freeChecked) {
            freeCheck.checked = false
        }
            mapleDefault.checked = true
    }
}

//add items from page to modal

function modalMenuImport(){


    for (const modalOpens of modalOpen) {
        modalOpens.addEventListener('click', function(e) {
           
            if (e.target.parentElement.classList.contains('menu-item-container')) {

                
            
                //get menu item pic and find the source
                let itemPic = e.target.parentElement.children[0].src

                let pos = itemPic.indexOf('img') + 0
                let itemPicPath = itemPic.slice(pos)

                //get wanted/imported elements

                let name = e.target.parentElement.children[1].innerText
                let desc = e.target.parentElement.children[2].innerText
                let price = e.target.parentElement.children[3].innerText

                let finalPrice = price.slice(1)

                const item = {}

                item.name = name
                item.pic = itemPicPath
                item.price = finalPrice
                item.desc = desc

            // clear import

                modalContent.innerHTML = ''

            //add clicked menu item

                const modalInfo = document.createElement('div')
                modalInfo.classList.add('modal-item')
                modalInfo.innerHTML = 
                `
                <h3 class="modal-cart-capture">${item.name}</h3>
                <p>${item.desc}</p>
                `

                modalContent.appendChild(modalInfo)

                // ADJUSTING MODAL TOTAL PRICE

                const storedTotalvar = `${item.price}`
                storedTotal.push(storedTotalvar)

                totalModalPrice.innerText = `${item.price}` 
                
// SIDES MODAL MENU

                const removeModalExtraS = document.querySelector('.customize-order')
                const sidesModal = document.querySelector('.sides-modal')

                const eggModal = document.querySelector('.egg-items')
                const potatoModal = document.querySelector('.potato-items')
                const meatModal = document.querySelector('.meat-items')
                const avoModal = document.querySelector('.avo-items')
                

                const scrambled = document.getElementById('scrambled')
                const hashbrowns = document.getElementById('hasbrowns')
                const bacon = document.getElementById('bacon')

// drinks Modal menu

                const drinkModal = document.querySelector('.drink-modal')

                const almondModal = document.querySelector('.almond-milk-items')
                const milkModal = document.querySelector('.milk-items')
                const juiceModal = document.querySelector('.juice-items')
                const teaModal = document.querySelector('.tea-cont')
                const coffeeModal = document.querySelector('.coffee-cont')
                const waterModal = document.querySelector('.water-items')

                const almondP = document.getElementById('almond-milk-p')
                const milkP = document.getElementById('milk-p')
                const juiceO = document.getElementById('orange')
                const teaG = document.getElementById('green-t')
                const coffeeB = document.getElementById('black-coffee')
                const waterP = document.getElementById('plainW')



                if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('egg')) {
                    sidesModal.style.display = 'block'
                    eggModal.style.display = 'flex'

                    potatoModal.style.display = 'none'
                    avoModal.style.display = 'none'
                    meatModal.style.display = 'none'

                    removeModalExtraS.style.display = 'none'
                    drinkModal.style.display = 'none'
                    

                    scrambled.checked = true
                    mapleDefault.checked = false
                    bacon.checked = false
                    hashbrowns.checked = false
                    
                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('potatoes')) {

                    sidesModal.style.display = 'block'
                    potatoModal.style.display = 'flex'

                    eggModal.style.display = 'none'
                    meatModal.style.display = 'none'
                    avoModal.style.display = 'none'

                    removeModalExtraS.style.display = 'none'
                    drinkModal.style.display = 'none'
                    

                    hashbrowns.checked = true
                    mapleDefault.checked = false
                    bacon.checked = false
                    scrambled.checked = false
                   

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('meat')) {
                    sidesModal.style.display = 'block'
                    

                    meatModal.style.display = 'flex'
                    eggModal.style.display = 'none'
                    potatoModal.style.display = 'none'
                    avoModal.style.display = 'none'

                    removeModalExtraS.style.display = 'none'
                    drinkModal.style.display = 'none'
                    

                    bacon.checked = true
                    mapleDefault.checked = false
                    hashbrowns.checked = false
                    scrambled.checked = false
                    
                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('avacado-toast')) {
                    sidesModal.style.display = 'block'
                    avoModal.style.display = 'block'

                    meatModal.style.display = 'none'
                    eggModal.style.display = 'none'
                    potatoModal.style.display = 'none'

                    drinkModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    mapleDefault.checked = false
                    hashbrowns.checked = false
                    scrambled.checked = false
                    bacon.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('almond-milk')) {
                    drinkModal.style.display = 'block'
                    almondModal.style.display = 'flex'

                    coffeeModal.style.display = 'none'
                    juiceModal.style.display = 'none'
                    milkModal.style.display = 'none'
                    teaModal.style.display = 'none'
                    waterModal.style.display = 'none'
                    
                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    almondP.checked = true
                    waterP.checked = false
                    coffeeB.checked = false
                    teaG.checked = false
                    juiceO.checked = false
                    milkP.checked = false
                    mapleDefault.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('milk')) {
                    drinkModal.style.display = 'block'
                    milkModal.style.display = 'flex'

                    coffeeModal.style.display = 'none'
                    juiceModal.style.display = 'none'
                    almondModal.style.display = 'none'
                    teaModal.style.display = 'none'
                    waterModal.style.display = 'none'

                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    milkP.checked = true
                    waterP.checked = false
                    coffeeB.checked = false
                    teaG.checked = false
                    juiceO.checked = false
                    almondP.checked = false
                    mapleDefault.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('juice')) {
                    drinkModal.style.display = 'block'
                    juiceModal.style.display = 'flex'

                    coffeeModal.style.display = 'none'
                    milkModal.style.display = 'none'
                    almondModal.style.display = 'none'
                    teaModal.style.display = 'none'
                    waterModal.style.display = 'none'

                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    juiceO.checked = true
                    waterP.checked = false
                    coffeeB.checked = false
                    teaG.checked = false
                    milkP.checked = false
                    almondP.checked = false
                    mapleDefault.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('tea')) {
                    drinkModal.style.display = 'block'
                    teaModal.style.display = 'block'

                    coffeeModal.style.display = 'none'
                    juiceModal.style.display = 'none'
                    milkModal.style.display = 'none'
                    almondModal.style.display = 'none'
                    waterModal.style.display = 'none'

                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    teaG.checked = true
                    waterP.checked = false
                    coffeeB.checked = false
                    juiceO.checked = false
                    milkP.checked = false
                    almondP.checked = false
                    mapleDefault.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('coffee')) {
                    drinkModal.style.display = 'block'
                    coffeeModal.style.display = 'block'

                    teaModal.style.display = 'none'
                    juiceModal.style.display = 'none'
                    milkModal.style.display = 'none'
                    almondModal.style.display = 'none'
                    waterModal.style.display = 'none'

                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    coffeeB.checked = true
                    waterP.checked = false
                    teaG.checked = false
                    juiceO.checked = false
                    milkP.checked = false
                    almondP.checked = false
                    mapleDefault.checked = false

                } else if (e.target.parentElement.classList.contains('menu-item-container') && e.target.parentElement.classList.contains('water')) {
                    drinkModal.style.display = 'block'
                    waterModal.style.display = 'flex'

                    coffeeModal.style.display = 'none'
                    teaModal.style.display = 'none'
                    juiceModal.style.display = 'none'
                    milkModal.style.display = 'none'
                    almondModal.style.display = 'none'

                    sidesModal.style.display = 'none'
                    removeModalExtraS.style.display = 'none'

                    waterP.checked = true
                    coffeeB.checked = false
                    teaG.checked = false
                    juiceO.checked = false
                    milkP.checked = false
                    almondP.checked = false
                    mapleDefault.checked = false

                } else {
                    removeModalExtraS.style.display = 'block'
                    sidesModal.style.display = 'none'
                    drinkModal.style.display = 'none'
                    mapleDefault.checked = true

                    waterP.checked = false
                    coffeeB.checked = false
                    teaG.checked = false
                    juiceO.checked = false
                    milkP.checked = false
                    almondP.checked = false
                    hashbrowns.checked = false
                    scrambled.checked = false
                    bacon.checked = false
                }



            }

        })
    }
}

modalMenuImport()

// updating modal cart price

const checkbox = document.querySelectorAll('.check') 

function updateModalPrice() {

    for (const checkboxes of checkbox) {
        checkboxes.addEventListener('click', function (e) {   
            
            // GET EXTRA PRICE

                let price = e.target.parentElement.lastElementChild.firstElementChild.textContent                
                let numPrice = parseFloat(price.slice(1))

            // CART TOTAL

                let numTotal = parseFloat(totalModalPrice.innerText)


               // const numTotalCart = parseFloat(totalModalPrice.innerText)
                //console.log(numTotalCart)
            // ADD/SUB CART TOTAL

            if (e.target.checked) {
                const varAddPrice =`${numTotal + numPrice}`
                const totalAdd = parseFloat(varAddPrice)
                totalModalPrice.innerText = totalAdd.toFixed(2)
            } else {
                const varSubPrice =`${numTotal - numPrice}`
                let totalSub = parseFloat(varSubPrice)
                totalModalPrice.innerText = totalSub.toFixed(2)
            }

        
        })
    }



}

updateModalPrice()

// MODAL ITEM ADD or SUB main menu item

const modalMainItemAdd = document.getElementById('plus-main-order')
const modalMainItemSubtract = document.getElementById('minus-main-order')
const modalMainItemNum = document.getElementById('num-main-order')


modalMainItemAdd.addEventListener('click', mainOrderAdd)
modalMainItemSubtract.addEventListener('click', mainOrderSub)

let mainOrderNum = 1


//array for menu price total
let storedTotal = []

function mainOrderAdd() {

    mainOrderNum++
    modalMainItemNum.value = mainOrderNum


    const total = totalModalPrice.innerText
    const numTotal = parseFloat(total)
    const storedTotalNum = parseFloat(storedTotal[0])

    const addO = `${numTotal + storedTotalNum}`
    let addN = parseFloat(addO)
    totalModalPrice.innerText = addN.toFixed(2)

   if (mainOrderNum > 1) {
    modalMainItemSubtract.disabled = false
   }
}

function mainOrderSub() {


    mainOrderNum--
    modalMainItemNum.value = mainOrderNum
    if (mainOrderNum < 2) {
        mainOrderNum = 1
        modalMainItemNum.value = mainOrderNum
        modalMainItemSubtract.disabled = true
    }   
   
    const total = totalModalPrice.innerText
    const numTotal = parseFloat(total)
    const storedTotalNum = parseFloat(storedTotal[0])

    const addO = `${numTotal - storedTotalNum}`
    let addN = parseFloat(addO)
    totalModalPrice.innerText = addN.toFixed(2)

}


// MOVING MODAL ITEM TO CART

const cartBar = document.querySelector('.cart-bar')

const cartBarCont = document.querySelector('.cart-bar-cont')

const toCartBtn = document.getElementById('add-to-cart-btn')


// totalModalPrice <---- this is modal price variable

// modalMainItemNum <---- this is modal main item amount variable

// checkbox <---- this is checkbox variable

let toCartArr = []
let exStorage = []

toCartBtn.addEventListener('click', toCart) 


const modalCheckedPush = document.querySelectorAll('.modal-to-cart')

function toCart() {

    const cartItemName = document.querySelector('.modal-cart-capture')

    toCartArr.push(totalModalPrice.innerText, modalMainItemNum.value, cartItemName.innerText)

   

   for (checkedBox of modalCheckedPush) {
        if (checkedBox.checked === true) {

            const exValue = checkedBox.value
  
            exStorage.push(exValue)
            
        }
    }

    const exTotal = exStorage.join(', ')

    toCartArr.push(exTotal)

     const cartItem = document.createElement('div')
     cartItem.classList.add('cart-item-container')
     cartItem.innerHTML = `
     
     <i class="fas fa-trash cart-item-remove"></i>
     
     <div class="cart-item-number">${toCartArr[1]}</div>
     <span>&times;</span>
     <div class="cart-item-info">
             <span class="cart-item-name">${toCartArr[2]}</span>
             <span class="cart-item-additions">${toCartArr[3]}</span>
     </div>
         <div class="cart-item-price">$${toCartArr[0]}</div>
         `
     
         cartBarCont.appendChild(cartItem)

         mobileCartCount()

toCartArr = []
exStorage = []

emptyCartText()
closesModal()

mobileCart.style.display = 'flex'

}


// ADDING CHECKOUT BTN AND REMOVING EMPTY CART TEXT


const cartEmpty = document.querySelector('.cart-empty-text')
const checkoutBtn = document.getElementById('checkout')

function emptyCartText() {
    if (cartBarCont.children.length > 0) {
        cartBar.style.justifyContent = 'flex-start'
        cartEmpty.style.display = 'none'    
        checkoutBtn.style.display = 'block'
        cartBarCont.style.display = 'block'
       } else {
        cartBar.style.justifyContent = 'center'
        cartEmpty.style.display = 'block'
        checkoutBtn.style.display = 'none'
        cartBarCont.style.display = 'none'
    }
}

cartBar.addEventListener('click', function (e) {

    if (e.target.classList.contains('cart-item-remove') || e.target.parentElement.classList.contains('cart-item-remove')) {
        e.target.parentElement.remove()
    }

    emptyCartText()

})

///// MOBILE CART COUNT

const mobileCartCountNum = document.querySelector('.mobile-cart-num')
const mobileCart = document.querySelector('.mobile-cart')

function mobileCartCount() {
    mobileCartCountNum.innerText = cartBarCont.children.length
}

if (cartBarCont.children.length === 0) {
    mobileCart.style.display = 'none'
}

///// CHECKOUT BUTTON - STORE CART IN LOCAL STORAGE

let priceCart = []
let nameCart = []
let addiCart = []
let numCart = []

checkoutBtn.addEventListener('click', moveToCheckout)
mobileCart.addEventListener('click', moveToCheckout)

function moveToCheckout() {
  
    const cartItems = document.querySelectorAll('.cart-item-container')
    

    for (const itemsInfo of cartItems) {
        const cartP = itemsInfo.lastElementChild.innerText
        const cartN = itemsInfo.lastElementChild.previousElementSibling.firstElementChild.innerText
        const cartA = itemsInfo.lastElementChild.previousElementSibling.lastElementChild.innerText
        const cartNum = itemsInfo.firstElementChild.nextElementSibling.innerText
        priceCart.push(cartP)
        nameCart.push(cartN)
        addiCart.push(cartA)
        numCart.push(cartNum)
    }

    localStorage.setItem( 'name', JSON.stringify(nameCart))
    localStorage.setItem('additions', JSON.stringify(addiCart))
    localStorage.setItem('price', JSON.stringify(priceCart))
    localStorage.setItem('itemNum', JSON.stringify(numCart))
    

    priceCart = []
    nameCart = []
    addiCart = []
    numCart = []
}