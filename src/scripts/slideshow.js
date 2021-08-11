$(document).ready( function (e){
    $('.review__switcher-btn').on('click', function(e){
        currentBtn = $(this)
        closeReviewDisplay();
        $('.reviews__display').each(function(index, elem){
            if($(elem).attr('data-linked') == currentBtn.attr('data-btn')){
                $(elem).css('display','flex');
            }
        });
    });
});

function closeReviewDisplay(){
    $('.reviews__display').css('display','none');
}