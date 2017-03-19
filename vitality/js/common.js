$(document).ready(function(){
/*======CAROUSEL=========*/
    var owl = $('.owl-carousel');

    owl.owlCarousel(
    {
        margin:30,
        responsive:{
            100:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
        },
        loop: true
    });

    $('.btn-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('.btn-next').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    })

    /*==============*/

    $('.scroll-down a').click(function(event) {
        $('html, body').animate({scrollTop: $('#about').offset().top},500);
    });

    $(document).scroll(function(event) {
        if($(window).scrollTop() >= 200) {
            $('header nav').addClass('onScrollTop');
        }
        else {
            $('header nav').removeClass('onScrollTop');
        }
    });

   
});

/**/