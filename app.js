// NAV BAR FUNCTION

const nav = document.querySelector('nav')
const hr = document.querySelector('hr')


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


for (const modalOpens of modalOpen) {
    modalOpens.addEventListener('click', opensModal)
}

modalClose.addEventListener('click', closesModal)

modal.addEventListener('click', outsideModalClick)


function opensModal() {
    modal.style.display = 'block'
}
 function closesModal() {
    modal.style.display = 'none'
    clearCheckedBoxes()
 }

function outsideModalClick(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
        clearCheckedBoxes()
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

                let finalPrice = price.slice(1).trim()


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

                const totalModalPrice = document.querySelector('.modal-total span')

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

                const total = e.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.textContent
                let numTotal = parseFloat(total)

                const cartTotal = e.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild


            // ADD/SUB CART TOTAL

            if (e.target.checked) {
                cartTotal.innerText = numTotal + numPrice
            } else {
                cartTotal.innerText = numTotal - numPrice
            }
          
        })
    }
}

updateModalPrice()


//clear checked boxes

function clearCheckedBoxes() {

    const freeChecked = document.querySelectorAll('.free-checked')
    const mapleDefault = document.getElementById('maple')

    for (const checkedbox of checkbox) {
        checkedbox.checked = false
    }
    for (const freeCheck of freeChecked) {
        freeCheck.checked = false
    }
        mapleDefault.checked = true
}