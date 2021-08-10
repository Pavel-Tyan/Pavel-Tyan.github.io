const dropDownListBtn1 = document.querySelector('.products__characteristics');
const dropDownList1 = document.querySelector('.dropdown-list')

dropDownListBtn1.addEventListener('mouseenter', e => {
        dropDownListBtn1.style.backgroundColor = "#E01F3D";
        dropDownList1.style.display = 'flex';
})

dropDownList1.addEventListener('mouseleave', e => {
        if(e.target == dropDownList1){
            dropDownListBtn1.style.backgroundColor = "#9A9A9A";
            dropDownList1.style.display = 'none';
        }
})

const dropDownListBtn2 = document.querySelector('.slide-2');
const dropDownList2 = document.querySelector('.list-2')

dropDownListBtn2.addEventListener('mouseenter', e => {
        dropDownListBtn2.style.backgroundColor = "#E01F3D";
        dropDownList2.style.display = 'flex';
})

dropDownList2.addEventListener('mouseleave', e => {
        if(e.target == dropDownList2){
            dropDownListBtn2.style.backgroundColor = "#9A9A9A";
            dropDownList2.style.display = 'none';
        }
})