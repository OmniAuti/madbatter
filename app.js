// NAV BAR FUNCTION

const nav = document.querySelector('nav')
const hr = document.querySelector('hr')

//array for menu price total
let storedTotal = []

//NAV BAR SCROLL FEATURE
window.addEventListener('scroll', () => {
    const navTop = nav.getBoundingClientRect()
   if (navTop.top === 0) {
       hr.style.display = 'none'
       nav.style.borderColor = '#000'
    } else {
        hr.style.display = 'block'
        nav.style.borderColor = 'transparent'
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

                let finalPrice = price.slice(1).trim(' ')


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
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                `

                modalContent.appendChild(modalInfo)

                // ADJUSTING MODAL TOTAL PRICE

                const storedTotalvar = `${item.price}`
                storedTotal.push(storedTotalvar)

                totalModalPrice.innerText = `${item.price}`

                

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
                let pricePos = price.indexOf() + 2
                let numPrice = parseFloat(price.slice(pricePos))

            // CART TOTAL

                const total = parseFloat(totalModalPrice.innerText)
                let numTotal = parseFloat(total)

               // const numTotalCart = parseFloat(totalModalPrice.innerText)
                //console.log(numTotalCart)
            // ADD/SUB CART TOTAL

            if (e.target.checked) {
                totalModalPrice.innerText = `${numTotal + numPrice}`
            } else {
                totalModalPrice.innerText = `${numTotal - numPrice}`
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


function mainOrderAdd() {

    mainOrderNum++
    modalMainItemNum.value = mainOrderNum


    const total = totalModalPrice.innerText
    const numTotal = parseFloat(total)
    const storedTotalNum = parseFloat(storedTotal[0])
    
   totalModalPrice.innerText = `${numTotal + storedTotalNum}`

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

   totalModalPrice.innerText = `${numTotal - storedTotalNum}`

}


// MOVING MODAL ITEM TO CART

const cartBar = document.querySelector('.cart-bar')
const cartItemPrice = document.querySelector('.cart-item-price')
const cartInfoCont = document.querySelector('.cart-item-info')
const cartItemName = document.querySelector('.cart-item-name')
const cartItemExtra = document.querySelector('.cart-item-additions')
const cartItemCont = document.querySelectorAll('.cart-item-container')
const cartRemoveItem = document.getElementById('cart-remove-button')

const toCartBtn = document.getElementById('add-to-cart-btn')


// totalModalPrice <---- this is modal price variable

// modalMainItemNum <---- this is modal main item amount variable

// checkbox <---- this is checkbox variable

let toCartArr = []
let exStorage = []

toCartBtn.addEventListener('click', toCart) 


const modalCheckedPush = document.querySelectorAll('.modal-to-cart')

function toCart() {

    toCartArr.push(totalModalPrice.innerText, modalMainItemNum.value)

   for (checkedBox of modalCheckedPush) {
        if (checkedBox.checked === true) {

            const exValue = checkedBox.value
  
            exStorage.push(exValue)

        }
    }

    const exTotal = exStorage.join(', ')

    toCartArr.push(exTotal)

     console.log(toCartArr)

     const cartItem = document.createElement('div')
     cartItem.classList.add('cart-item-container')
     cartItem.innerHTML = `<button class="cart-item-remove" id="cart-remove-button"><i class="fas fa-trash"></i></button>
     
     <div class="cart-item-number">${toCartArr[1]}<span>&times;</span></div>
     <div class="cart-item-info">
             <span class="cart-item-name">The Original</span>
             <span class="cart-item-additions">${toCartArr[2]}</span>
     </div>
         <div class="cart-item-price">$${toCartArr[0]}</div>`
     
     cartBar.appendChild(cartItem)

toCartArr = []
exStorage = []

emptyCartText()
closesModal()

}

const cartEmpty = document.querySelector('.cart-empty-text')

function emptyCartText() {
    if (cartBar.children.length > 1) {
        cartEmpty.style.display = 'none'    }
    else {
        cartEmpty.style.display = 'block'
    }
}
