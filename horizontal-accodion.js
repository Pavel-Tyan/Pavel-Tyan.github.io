// $(document).ready(function(e){
//     $('.color__main-info-btn').on('click',function(e){
//       e.preventDefault();
//       currentHorizAccordionItem = $(this);
//       closeHorizAccordionItems();
//       if(currentHorizAccordionItem.next('.color__text').hasClass('active-horizontal-accordion-item')) {
//         currentHorizAccordionItem.next('.color__text').removeClass('active-horizontal-accordion-item');
//       }
//       else {
//         openHorizAccordionItems(currentHorizAccordionItem);
//       };
//     });
// });

// function closeHorizAccordionItems(){
//     $('.color__text').removeClass('active-horizontal-accordion-item');
// };

// function openHorizAccordionItems(currentHorizAccordionItem){
//     currentHorizAccordionItem.next('.color__text').addClass('active-horizontal-accordion-item');
// };




// $(document).ready(function(e){
//   $('.color__main-info-btn').on('click',function(e){
//     e.preventDefault();
//     currentHorizAccordionItem = $(this);
//     if(currentHorizAccordionItem.next('.color__text').hasClass('active-horizontal-accordion-item')) {
//       closeHorizAccordionItems();
//     } else {
//       closeHorizAccordionItems();
//       openHorizAccordionItems(currentHorizAccordionItem);
//     }
//   });
// });

// function closeHorizAccordionItems(){
//   $('.color__text').removeClass('active-horizontal-accordion-item');
// };

// function openHorizAccordionItems(currentHorizAccordionItem){
//   currentHorizAccordionItem.closest('.color').find('.color__text').addClass('active-horizontal-accordion-item');
// };









$(document).ready(function(e){
  $('.color__main-info-btn').on('click',function(e){
    e.preventDefault();
    currentHorizAccordionItem = $(this);
    if($('body').css('font-size')==desktopFontSize){
      if(currentHorizAccordionItem.next('.color__text').hasClass('active-horizontal-accordion-item')) {
        closeHorizAccordionItems();
      } else {
        closeHorizAccordionItems();
        openHorizAccordionItems(currentHorizAccordionItem);
      }
    }
    else{
      if(currentHorizAccordionItem.next('.color__text').hasClass('active-horizontal-accordion-item')) {
        currentHorizAccordionItem.closest('.color').removeClass('active-horizontal-accordion-elem');
        closeHorizAccordionItems();
      } else {
        currentHorizAccordionItem.closest('.color').addClass('active-horizontal-accordion-elem');
        closeHorizAccordionItems();
        openHorizAccordionItems(currentHorizAccordionItem);
      }
    }
  });
  $('.color__close-btn').on('click', function(e){
    e.preventDefault();
    closeHorizAccordionItems();
    $('.color').removeClass('active-horizontal-accordion-elem');
  });
});

function closeHorizAccordionItems(){
  $('.color__text').removeClass('active-horizontal-accordion-item');
};

function openHorizAccordionItems(currentHorizAccordionItem){
  $(currentHorizAccordionItem).closest('.color').find('.color__text').addClass('active-horizontal-accordion-item');
};








