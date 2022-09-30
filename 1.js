$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#share').click(function(){
        $(this).toggleClass('share-active');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

      

    });

    $('.screen-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            710:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

});