let hamburgerButton = document.querySelector('.hamburgerMenu');
let menu = document.querySelector('#menu_interior');
let isShowed = false;


showOrHideMenu = () =>{
    if(!isShowed){
        menu.classList.add('showed');
        isShowed = true;
    } else{
        menu.classList.remove('showed');
        isShowed = false;
    }
}

window.onload = () => {
    hamburgerButton.addEventListener('click', showOrHideMenu);
}