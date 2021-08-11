$(document).ready(function(){
    const slider = $('.slider').bxSlider({
        pager: false,
        controls: false,
        touchEnabled: false
    });
    $('.arrow-left').click( e =>{
        e.preventDefault();
        slider.goToPrevSlide();
        dropDownListBtn1.style.backgroundColor = "#9A9A9A";
        dropDownList1.style.display = 'none';
    });
    $('.arrow-right').click( e =>{
        e.preventDefault();
        slider.goToNextSlide();
        dropDownListBtn2.style.backgroundColor = "#9A9A9A";
        dropDownList2.style.display = 'none';
    });

});