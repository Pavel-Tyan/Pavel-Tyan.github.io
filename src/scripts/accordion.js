const desktopFontSize='16px';
$(document).ready( function (e){
    $('.accordion__button').on('click',function(e){
        e.preventDefault();
        currentAcordionBtn = $(this);
        if($('body').css('font-size')!=desktopFontSize){
            if(currentAcordionBtn.siblings().css('display')=='block') {
                currentAcordionBtn.siblings().slideUp();    
            }
            else {
                $('.accordion__button').siblings().slideUp();
                currentAcordionBtn.siblings().slideDown();   
            }
        }
        else{
            if(currentAcordionBtn.nextAll().css('display')=='block') {
                currentAcordionBtn.nextAll().slideUp();    
            }
            else {
                $('.accordion__button').nextAll().slideUp();
                currentAcordionBtn.nextAll().slideDown();   
            }
        }
    })  
});


// Дополнительная единица измерения для корректного отображения верстки в браузере на мобильных устройствах
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);





                    