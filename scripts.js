document.addEventListener('DOMContentLoaded', ()=>{
    const mainNavs = document.querySelectorAll('.main-nav')
    const menuBtn = document.querySelector('.menu-button')

    menuBtn.addEventListener('click', ()=>{
        mainNavs.forEach(nav => nav.classList.toggle('main-nav--open'))
    })
})