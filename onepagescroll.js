const sections = $('section');
const display = $('.maincontent');
//
const fixedMenu = $('.fixed-sidebar');
//

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = sectionEq => {
    const position = sectionEq * -100;
    if(isNaN(position)){
        console.error('передано не верное значение в countSectionPosition')
        return 0;
    }    
    return position;
}

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass)
}
function performTransition(sectionEq){

    if(inScroll == false) {

        const transitionOver = 1000;
        const mouseInertialOver = 300;
        inScroll = true;

        const position = countSectionPosition(sectionEq);
        display.css({
            transform: `translateY(${position}%)`
        });

        sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

        setTimeout(() => {
            inScroll = false;

            //
            fixedMenu.find('.fixed-sidebar__button').eq(sectionEq).addClass('fixed-sidebar__active').closest('.fixed-sidebar__item').siblings().find('.fixed-sidebar__button').removeClass('fixed-sidebar__active');
            // 
        }, transitionOver + mouseInertialOver);
    }
};

function viewportScroller(direction){
    
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return{
        next(){
            if(nextSection.length) {
                performTransition(nextSection.index());
            }
        },
        prev(){
            if(prevSection.length) {
                performTransition(prevSection.index());
            }
        },
    }
};
$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();

    if(deltaY > 0) {
        scroller.next();
    }
    if(deltaY < 0) {
        scroller.prev();
    }
});

$(window).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    const scroller = viewportScroller();

    if(tagName != 'input' && tagName != 'textarea'){
       switch(e.keyCode){
        case 38:
            scroller.prev();
            break;

        case 40:
            scroller.next();
            break;
       }
    }
});

$('.wrapper').on('touchmove', e => e.preventDefault());

$('[data-scroll-to-section]').on('click', e => {
    e.preventDefault;
    const $this = $(e.currentTarget);

    const menuLinkName = $this.attr('data-scroll-to-section');

    const scrollToSection = $(`[data-section-name=${menuLinkName}]`);
    performTransition(scrollToSection.index());
    fullscreenMenu.style.display = 'none';
    $('html').css('overflow-y','visible');
});


if(isMobile){
    
        $("body").swipe( {
            //Generic swipe handler for all directions
            swipe:function(
                event, 
                direction) {
                const scroller = viewportScroller();
                let scrollDirection ='';
                // if(direction = 'up'){
                //     scrollDirection = 'next';
                // }
                // else if(direction = 'down'){
                //     scrollDirection = 'prev';
                // }
                switch(direction){
                    case 'up':
                        scrollDirection = 'next';
                        break;
            
                    case 'down':
                        scrollDirection = 'prev';
                        break;
                   }
        
                scroller[scrollDirection]();
            },
          });
}
