$(function() {
  $('.prodlist-content__btn').on('click', function(){
    $('.prodlist__filters').slideToggle();
  })

   $('.footer-top__title').on('click', function(){ //сворачивает список под заголовком
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.menu__burger').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });
  $('.menu__list-link').on('click', function(){
    $('.menu__list').removeClass('menu__list--active')
  });


  $('.shop-related__items').slick({
     slidesToShow: 4,
        slidesToscroll: 1,
        infinite: false,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-next.svg"</button>',
        responsive: [
    {
      breakpoint: 1200,
      settings: {
         slidesToShow: 3,
      }
    },
     {
      breakpoint: 900,
      settings: {
         slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 660,
      settings: {
         slidesToShow: 1,
      }
    },
  ]
  })

  $('.shop-tabs__top-btn').on('click', function(e) {
     e.preventDefault();
    $('.shop-tabs__top-btn').removeClass('shop-tabs__top-btn--active');
    $(this).addClass('shop-tabs__top-btn--active');

    $('.shop-tabs__content-item').removeClass('shop-tabs__content-item--active');
    $($(this).attr('href')).addClass('shop-tabs__content-item--active');

    
  })


  $('.shop__details-input').styler();


    $('.shop-slide__thumb').slick({
        asNavFor:  '.shop-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToscroll: 1, 
        vertical: true,
        draggable: false
  });
    $('.shop-slide__big').slick({
        asNavFor: '.shop-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToscroll: 1,
         responsive: [
    {
      breakpoint: 1200,
      settings: {
        draggable: true,
        dots: true
      }
    }
  ]
  });



    $('.products__wrapper-link').on('click', function(e) {
       e.preventDefault();
      $('.products__wrapper-link').removeClass('products__wrapper-link--active');
      $(this).addClass('products__wrapper-link--active');
  });


   $('.prodlist-content__filter-btn').on('click', function() {
      
      $('.prodlist-content__filter-btn').removeClass('prodlist-content__filter-btn--active');
      $(this).addClass('prodlist-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
      $('.prodlist-content__item').addClass('prodlist-content__item--list');
      $('.prodlist-content__inner').addClass('prodlist-content__nogrid');
  });

  $('.button-grid').on('click', function() {
      $('.prodlist-content__item').removeClass('prodlist-content__item--list');
      $('.prodlist-content__inner').removeClass('prodlist-content__nogrid');
  });

  
  $(".stars-details").rateYo({
    readOnly: true,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16"version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });
   $(".star-small").rateYo({
    readOnly: true,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16"version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });


  $(".star").rateYo({
    readOnly: true,
    // starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16"version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });

 $(".filter-price__input").ionRangeSlider({
        type: "double",
         prefix: "$",
         onStart: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);
         },
         onChange: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);
         },
       
    });


 $('.top-slider__top').slick({
    arrows: false,
    dots:true
 });
 var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});