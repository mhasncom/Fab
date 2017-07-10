$('nav li a').click(function(){
    if(!$(this).next().hasClass('active')) {
        $('.subNav').removeClass('active');
        $(this).next().addClass('active');
        $('.overlay').addClass('active');
    } else {
        $('.subNav').removeClass('active');
        $('.overlay').removeClass('active');
    }
});

$('.menu').click(function(){
    $('.offCanvasMenu').addClass('active');
    $('.overlay').addClass('active');
});
$('.closeMenu').click(function(){
    $('.offCanvasMenu').removeClass('active');
    $('.overlay').removeClass('active');
});

function checkOffset() {
    var a=$(document).scrollTop()+window.innerHeight;
    var b=$('footer').offset().top;
    if (a<b) {
        $('.quickCatFloat ul, .rightFloat ul').css('bottom', '20px');
    } else {
        $('.quickCatFloat ul, .rightFloat ul').css({'bottom':(20+(a-b))+'px'});
    }
}

var sLHeight = $('.storeList').height();
$('.storeAdverts .img').height(parseInt(sLHeight, 10) / 2 - 30);

$(document).ready(checkOffset);
$(document).scroll(checkOffset);

$('.productList').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          infinite: true,
          centerMode: true,
          variableWidth: true,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      arrows: false,
    }
  }
  ]
});

$('.childrenBannerMobile > ul').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      centerMode: true,
      variableWidth: false,
      arrows: false,
    }
  }
  ]
});

$('.promoBanners ul').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    }
  }
  ]
});

$('.sliderType1 .slider').slick({
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      infinite: true,
      variableWidth: false,
      arrows: false,
    }
  }
  ]
});

$('.sliderType2 .slider').slick({
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
      }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      infinite: true,
      variableWidth: false,
      arrows: false,
    }
  }
  ]
});

$('.sliderType3 .slider').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
      }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      infinite: true,
      variableWidth: false,
      arrows: false,
    }
  }
  ]
});

$('.sBList').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    centerMode: true,
    variableWidth: false,
    rows: 2,

  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

$('.categories').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    }
  ]
});

$('.featuredList').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  rows: 2,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    }
  ]
});

$('.giftBookLover').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,

        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    }
  ]
});

$('.featuredSeriesAuthors').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" class="svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" class="svg"></button>',
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        arrows: false,
      }
    }
  ]
});

if ($('.backToTop').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.backToTop').addClass('show');
            } else {
                $('.backToTop').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.backToTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
$('.panel-heading').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
        e.stopPropagation();
    }
});

$('.panel-heading').click(function(){
    if( $('.panel-heading').next('.panel-collapse').hasClass('in') ) {
        $('.panel-heading').removeClass('active');
        $(this).addClass('active');
    } else {
        $(this).removeClass('active');
    }
});

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});
