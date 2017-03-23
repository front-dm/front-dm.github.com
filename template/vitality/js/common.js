(function($) {
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
        });

        $('.btn-next').click(function() {
            owl.trigger('next.owl.carousel', [300]);
        });

        /*==============*/
        //Scroll Down
        $('.scroll-down a').click(function(event) {
            $('html, body').animate({scrollTop: $('#about').offset().top},500);
        });

        //Navbar Fixed
        $(document).scroll(function(event) {
            if($(window).scrollTop() >= 200) {
                $('header nav').addClass('onScrollTop');
            }
            else {
                $('header nav').removeClass('onScrollTop');
            }
        });

        //Link
        var anchor = $(".menu-top > li > a[href^='#']");
        anchor.click(function(event) {
            var href = $(this).attr('href');
            $('html,body').animate({scrollTop: $(href).offset().top},700);
            return false;   
        }); 

        //Chooser
        $('.btn-color i').click(function(event) {
                $('#choose-color').toggleClass('open');
        })

        $('.colors li').click(function(event) {
            var color = $(this).css('backgroundColor');
            $('body hr').css('borderColor', color);
            $('body i.fa').css('color', color);
            $('.wrap-port').css('backgroundColor', color);
            $('svg .st0').css('fill', color);
            $('.menu-top li a').css('color', color);
            $('.title-top h3').css('color', color);
        });

    })(jQuery);
/**/