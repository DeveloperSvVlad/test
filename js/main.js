
//! Анимация для чисел --------------------------------------->>>>>>>>
var counterAnimateContainer = $(".counter-animate-container") || null;
$(window).on("scroll.animate", function(){
if( counterAnimateContainer.length && !counterAnimateContainer.hasClass("counter-animate-started") && scrolledDiv( counterAnimateContainer ) ){
    counterAnimateContainer.addClass("counter-animate-started");
    setTimeout(function(){
      $(".counter-animate").map( function(i, el){
        var el = $(el);
        var num = el.text()*1;
        if( isNaN(num) )
          return;
        var cnt = 0;
        el.text(cnt)
        var interval = setInterval(function(){
          el.text( Math.round(cnt += num/(2*10) ) )
          if( cnt >= num ){
            clearInterval( interval );
            el.text( num );
          }
        }, 75);
       }, 3500);
    });
}
function scrolledDiv(el) {
try {
  var docViewTop = $(window).scrollTop(),
    docViewBottom = docViewTop + $(window).height(),
    elTop = $(el).offset().top,
    elBottom = elTop + $(el).height() / 1.8;
} catch (err) {
  console.error();
}
return elBottom <= docViewBottom && elTop >= docViewTop;
}
});

//! Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
if (document.querySelectorAll('.swiper-container.product__slider-container').length > 0) {
    const mySwiper = new Swiper('.swiper-container.product__slider-container', {
        // loop: true,
        slidesPerView: 1,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next.product-button-next',
            prevEl: '.swiper-button-prev.product-button-prev',
          },
    });
}

//!!!!!! Бургер меню ------------------------------------------------>>>>>>
const $body = document.querySelector('body'),
  $menuButton = document.querySelector('.burger'),
  $menu = document.querySelector('.menu');
  
function closeBurger() {
    $menuButton.classList.remove('active');
    $menu.classList.remove('active');
    $body.style.overflow = '';
}
function openBurger() {
    $menuButton.classList.add('active');
    $menu.classList.add('active');
    $body.style.overflow = 'hidden';
}

if (document.querySelectorAll('.burger').length > 0) {
    $menuButton.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            closeBurger();
        } else if (!this.classList.contains('active')) {
             openBurger();
        }
  });
}

const menuLink = document.querySelectorAll('.menu__list-link');
  menuLink.forEach((el) =>  {
    el.addEventListener('click', (e) => {
      
    if (el.getAttribute("href") === "#") {
      e.preventDefault();
    } else {
      closeBurger();
       }
    })
})
//!!!!!!! Fixed block -------------------------------------------->>>>>
const fixedBlock = document.querySelector('.header');
const checkedScroll = () => {
  if (window.pageYOffset > 170) {
      fixedBlock.classList.add('active');
  } else {
      fixedBlock.classList.remove('active');
  }     
}

window.addEventListener('scroll', checkedScroll);
document.addEventListener('DOMContentLoaded', checkedScroll);



//!!!!!!!! Modalka -------------------------------------------->>>>>>>
// Модалка 
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
// const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach((item) => {
    item.addEventListener('click', (event) => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');
        
        modalContent.addEventListener('click', event => {
            event.stopPropagation;
        })
        modal.classList.add('show');
        body.classList.add('no-scroll')
        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);
       
    })
})

modal.forEach((item) => {
    item.addEventListener('click', (event) => {
        let currentModal = event.target;
        if (currentModal === item) {
            // let modalContent = currentModal.querySelector('.modal__content'); 
            // modalContent.removeAttribute('style');
            closeModal(currentModal);
        }
    })
})

const closeModal = (currentModal) => {
        let modalContent = currentModal.querySelector('.modal__content'); 
        modalContent.removeAttribute('style');
        setTimeout(() => {
            currentModal.classList.remove('show');
            body.classList.remove('no-scroll')
        }, 200);
        
}


//! Табы  -------------------------------------->>>>>>
const $tabsBtn = document.querySelectorAll('.tabs__btn');
const $tabsItem = document.querySelectorAll('.tabs__content-product');
if (document.querySelectorAll('.tabs__btn').length > 0) {
    const onTabClick = (item) => {
        item.addEventListener('click', () => {
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tabs');
            let currentTab = document.querySelector(tabId);
            
            if (!curentBtn.classList.contains('active')){
                $tabsBtn.forEach((item) => {
                    
                    item.classList.remove('active');
                })
                $tabsItem.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    
    $tabsBtn.forEach(onTabClick);
    document.querySelector('.tabs__btn').click();
    
}


//! Подсветка городов
const $citiyes = document.querySelectorAll('.city');
const $dots = document.querySelectorAll('.city-dot');

for (let i = 0; i < $citiyes.length; i++) {
    $citiyes[i].onmouseover = function() {
        $citiyes[i].classList.add('active');
        $dots[i].classList.add('active');
    }
    $citiyes[i].onmouseout = function () {
        $citiyes[i].classList.remove('active');
        $dots[i].classList.remove('active');
    }
}