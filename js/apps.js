$(function() {


    $(window).on('scroll', function() {

        var scrollTop= $(this).scrollTop();

        console.log(scrollTop)
        if(scrollTop > 500) {
            $('#backToTop').fadeIn(500);
        }else{
            $('#backToTop').fadeOut(500);
        }

    })

    $('#backToTop').on('click', function() {
        $('html,body').animate({
            scrollTop:0
        }, 500) 
    })

    $(window).on('load' , function(){
        $('#preloader').fadeOut(1000)
    })

    $('a').on('click' , function(e) {
        e.preventDefault();

        var hash = this.hash

        if( this.hash !=='') {
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1000)
                  // hash link connect korar way
            
        }
    })


})

