//Navigation menu

let btnMenu = document.querySelector('.btn__mobile'),
    menuList = document.querySelector('.navigation__list');

btnMenu.addEventListener("click", mobileMenu);

function mobileMenu () {
  btnMenu.classList.toggle("active");
  menuList.classList.toggle("navigation__list--active");
}

let navLink = document.querySelectorAll('.navigation__list-item');

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu () {
  btnMenu.classList.remove("active");
  menuList.classList.remove("navigation__list--active");
}

//Slick Slider
$(document).ready(function(){
 
  let slickOptions = {
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  
  //header slider
  $('.slider__header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots:true,
    arrows: false,
    autoplaySpeed: 4000,
    appendDots: $('.slider__header-dots'),
  });

  //section Products
  $('.slider__products').slick($.extend({
    prevArrow: '<div class="slider__arrows slider__arrows--prev"></div>',
    nextArrow: '<div class="slider__arrows slider__arrows--next"></div>',
    appendArrows: $('.slider__products-arrows'),
    appendDots: $('.slider__products-dots'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
    ]
  }, slickOptions));

  // section partner slider
  $('.slider__partners').slick($.extend({
    appendDots: $('.slider__partners-dots'),
    prevArrow: '<div class="slider__arrows slider__arrows--prev"></div>',
    nextArrow: '<div class="slider__arrows slider__arrows--next"></div>',
    appendArrows: $('.slider__partners-arrows'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
    ]
  }, slickOptions));

});

