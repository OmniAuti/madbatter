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

