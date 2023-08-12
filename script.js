
const myHeader = document.querySelector('header')


document.addEventListener('scroll', () => {
    window.scrollY > 0 ? myHeader.classList.add('active') : myHeader.classList.remove('active')
})

