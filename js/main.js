(function ($) {
    "use strict";
    
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });
    
    
    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });
    
      $('.info-bar').on('click', function () {
        $('.extra-info').addClass('info-open');
      })
    
      $('.close-icon').on('click', function () {
        $('.extra-info').removeClass('info-open');
      })
    
    
      /* Search
      -------------------------------------------------------*/
      var $searchWrap = $('.search-wrap');
      var $navSearch = $('.nav-search');
      var $searchClose = $('#search-close');
    
      $('.search-trigger').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: 'toggle' }, 500);
        $navSearch.add($searchClose).addClass("open");
      });
    
      $('.search-close').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: 'toggle' }, 500);
        $navSearch.add($searchClose).removeClass("open");
      });
    
      function closeSearch() {
        $searchWrap.fadeOut(200);
        $navSearch.add($searchClose).removeClass("open");
      }
    
      $(document.body).on('click', function (e) {
        closeSearch();
      });
    
      $(".search-trigger, .main-search-input").on('click', function (e) {
        e.stopPropagation();
      });
    
    
    
    // pricing active
    $('.chose-box').on('mouseenter', function () {
            $(this).addClass('active').parent().siblings().find('.chose-box').removeClass('active');
    })
    
    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    $('.activ-testimonai').slick({
       dots: false,
       arrows: true,
       infinite: true,
       speed: 300,
       slidesToShow: 3,
       slidesToScroll: 1,
       prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
         nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        centerMode: true,
        centerPadding: '0',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            infinite: true,
            dots: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
    
    $('.brand-active').slick({
       dots: false,
       arrows: false,
       infinite: true,
       speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll:1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    
    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:5
            }
        }
    })
    
    
      // blog - active
      $('.postbox__gallery').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    
    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
    });
    
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    
    
    // isotop
    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
    });
    
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    
    
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fal fa-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    // WOW active
    new WOW().init();
    
      // map
      function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 11,
          scrollwheel: false,
          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(40.6700, -73.9400), // New York
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#193341" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#29768a" }, { "lightness": -37 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#3e606f" }, { "weight": 2 }, { "gamma": 0.84 }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": 0.6 }, { "color": "#1a3541" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }]
        };
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');
    
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          title: 'Cryptox'
        });
      }
      if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
      }
    
    
    
    
    })(jQuery);