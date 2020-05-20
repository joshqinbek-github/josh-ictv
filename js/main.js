$(window).on('load', function () {
    $('.loader-site').fadeOut("slow");
});
$(document).ready(function () {

    $("#ic").click(function () {
        $(this).hide(-100);
        $("#ix").show(-100);
        $('.rightbar').animate({
                height: '90%'
            }
        );


    });
    $("#ix").click(function () {
        $(this).hide(-100);
        $("#ic").show(-100);
        $('.rightbar').animate({
                height: '0'
            }
        );

    });
    $(".rightlinks").click(function () {
        $("#ix").hide(-100);
        $("#ic").show(-100);
        $('.rightbar').animate({
                height: '0%'
            }
        );

    });


    const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    $('#search').keyup(function () {
        const search = $('#search');
        if (search.val() != '') {
            $('.hide').hide();
            $('.no').show();
        } else {
            $('.hide').show();

        }

        for (var i = 0; i < classes.length; i++) {
            var content = $("." + classes[i] + " p");
            if (content.text().toLowerCase().indexOf(search.val().toLowerCase()) > 0) {

                $('.' + classes[i]).show();

            } else {
                $('.' + classes[i]).hide();

            }
            if (search.val() == '') {
                $('.searchable').show();
                $('.no').hide();
            }

        }
    });


    $('#fixedForm').click(function () { 
        $('.form_body').fadeToggle();
        
        
    });


    //owl

    $("#owl-demo").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',

        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
    $("#owl-post").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',

        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
});
