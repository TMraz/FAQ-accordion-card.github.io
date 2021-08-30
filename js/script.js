$(document).ready(function(){
    var list = $('dl');
    list.find('dd').hide();

    list.find('a').mouseenter(function(){
        $(this).addClass('active');        
    });

    list.find('a').mouseleave(function(){
        $(this).removeClass('active');
    });

    list.find('dt').on('click', function() {
        $(this).addClass('selected')
                .siblings('dt').removeClass('selected')
        $(this).next().slideToggle()
               .siblings('dd').slideUp();
    });

    $('dt').click(function () {
        $(this).find('img').toggleClass('flip') 
        $(this).siblings().find('img').removeClass('flip');
    });

});