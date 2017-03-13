    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        nav:true,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsive:{
            0:{
                items:1
            }
        }
    })
    $('.owl-carousel-sponsors').owlCarousel({
        loop:true,
        dots: true,
        nav:true,
        navText: ["<img src='images/prev-pink.png'>","<img src='images/next-pink.png'>"],
        responsive:{
            0:{
                items:1
            }
        }
    })
$( document ).ready(function() {
    $('.teammate').hover(function() {
        $(this).children('.overlay').fadeToggle('fast');
    });

    $('.btn-download').mouseover(function(){
        $('.btn-download span').css('background-position', '25px');
        $('.btn-download').css('background', '#EF0187');
        $('.btn-download').css('color', '#FFFFFF');
    });
    $('.btn-download').mouseout(function(){
        $('.btn-download span').css('background-position', 'left');
        $('.btn-download').css('background', 'none');
        $('.btn-download').css('color', '#EF0187');
    });

    $('#how-it-works .desktop .icon-how').mouseover(function(){
        $('#how-it-works .desktop .icon-how').removeClass('purple-icon');
        $('#how-it-works .desktop .icon-how').children().removeClass('hover');
        $(this).addClass('purple-icon');
        $(this).children().addClass('hover');
    });



    $('#how-it-works .desktop .blurb-container').children().children().hide();
    $('#how-it-works .desktop .apply').addClass('purple-icon');
    $('#how-it-works .desktop .apply').children().addClass('hover');
    $('.apply-blurb').show();
    
    $('#how-it-works .desktop .icon-how.apply').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.apply-blurb').show();
    });
    $('#how-it-works .desktop .icon-how.select').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.select-blurb').show();
    });
    $('#how-it-works .desktop .icon-how.interview').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.interview-blurb').show();
    });
    $('#how-it-works .desktop .icon-how.finalists').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.finalists-blurb').show();
    });
    $('#how-it-works .desktop .icon-how.train').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.train-blurb').show();
    });
    $('#how-it-works .desktop .icon-how.dine').mouseover(function(){
        $('#how-it-works .desktop .blurb-container').children().children().hide();
        $('.dine-blurb').show();
    });
});