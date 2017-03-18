/*CAROUSEL*/
$(document).ready(function(){
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
            1000:{
                items:4
            }
        },
        dots: true,
        loop: true
    });

    $('.btn-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('.btn-next').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    })

});

/**/