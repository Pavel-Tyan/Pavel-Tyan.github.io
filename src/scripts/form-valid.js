const validateFields = function(form, fieldsArray){
    fieldsArray.forEach(field => {
        field.removeClass('form__error');
        if(field.val().trim()=="") {
            field.addClass('form__error');
        }
    })

    const errorFields = $('.form__error','.form');

    return errorFields.length == 0;
}
$('.form').submit( e=> {
    e.preventDefault();
    
    const form = $(e.currentTarget);

    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal=$('#modal-window');
    const modalContent=modal.find('.modal-window__text');

    const isValid = validateFields(form, [name, phone, comment, to]);

    if(isValid) {
        $.ajax({
            url:'https://webdev-api.loftschool.com/sendmail',
            method:'post',
            data:{
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            success: data =>{
                modalContent.text(data.message);
                modalWindowShow();
            },
            error: data =>{
                const message = data.responseJSON.message
                modalContent.text(message);
                modalWindowShow()
            }
    });
    }

    

});