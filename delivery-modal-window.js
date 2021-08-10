$(document).ready(function(e){
    $('.btn-close').on('click', function(e){
        e.preventDefault();
        modalWindowClose();
    })
});

function modalWindowShow(){
    $('.modal-window').css('display','flex');
    $('html').css('overflow-y','hidden');
};

function modalWindowClose(){
    $('.modal-window').css('display','none');
    $('html').css('overflow-y','visible');
}