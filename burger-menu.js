const fullscreenMenu = document.querySelector('.fullscreen-menu');
const fullscreenMenuOpenBtn = document.querySelector('#burger-btn');
const fullscreenMenuCloseBtn = document.querySelector('#closeMenu');

fullscreenMenuOpenBtn.addEventListener('click', e => {
    e.preventDefault();
    openBurgerMenu();
    hideVerticalScroll();
})

fullscreenMenuCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    closeBurgerMenu();
    showVerticalScroll();
})

function closeBurgerMenu(){
    fullscreenMenu.style.display = 'none';
}

function openBurgerMenu(){
    fullscreenMenu.style.display = 'flex';
}

function hideVerticalScroll(){
    $('html').css('overflow-y','hidden');
}

function showVerticalScroll(){
    $('html').css('overflow-y','visible');
}







