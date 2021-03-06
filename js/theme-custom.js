$(window).load(function() {
    'use strict';
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(1200).fadeOut("slow")
});
jQuery(document).ready(function($) {
    $('#slider-4').liquidSlider({
        crossLinks: true,
        preloader: true,
        autoSlide: false,
        slideEaseDuration: 1000,
        heightEaseDuration: 1000,
        autoHeight: true,
        useCSSMaxWidth: 1230,
        includeTitle: true,
        panelTitleSelector: ".title",
        mobileNavigation: true,
        responsive: true,
        dynamicTabsHtml: true,
        hoverArrows: false,
        hideSideArrows: true,
    });
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false,
                title: {
                    type: 'outside'
                },
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        }
    });
    
/*
    $(".tweet-stream").tweet({
        username: "barackobama",
        //modpath: "twitter/",
        count: 1,
        template: "{text}{time}",
        loading_text: "loading twitter feed..."
    });
*/

    $("#back-top").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn()
            } else {
                $('#back-top').fadeOut()
            }
        });
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false
        })
    })
});
jQuery(function() {
    jQuery('.skillbar').appear(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000)
        })
    })
});

/*
$(document).ready(function() {
    'use strict';
    jQuery("#contact_form").validate({
        meta: "validate",
        submitHandler: function(b) {
            var c = $("#name").val();
            var d = $("#lastname").val();
            var e = $("#email").val();
            var f = $("#phone").val();
            var g = $("#comment").val();
            $.post("contact.php", {
                name: c,
                lastname: d,
                email: e,
                phone: f,
                comment: g
            }, function(a) {
                $('#sucessmessage').append(a)
            });
            $('#contact_form').hide();
            return false
        },
        rules: {
            name: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            comment: {
                required: true
            }
        },
        messages: {
            name: "Please enter your name.",
            lastname: "Please enter your last name.",
            email: {
                required: "Please enter email.",
                email: "Please enter valid email"
            },
            phone: "Please enter a phone.",
            comment: "Please enter a comment."
        },
    })
});
*/

$(document).ready(function() {
	$(".switch-button").hide();
	$(".styleswitcher").hide();
	/*
    $(".switch-button").click(function() {
        if ($(this).is(".open")) {
            $(this).addClass("closed");
            $(this).removeClass("open");
            $(".styleswitcher").animate({
                "left": "-220px"
            })
        } else {
            $(this).addClass("open");
            $(this).removeClass("closed");
            $(".styleswitcher").animate({
                "left": "0px"
            })
        }    
    })
    */
});

$(document).ready(function() {
    /*
    if ($.cookie("css")) {
        $("link.alt").attr("href", $.cookie("css"))
    }*/

    $(".color-scheme a").click(function() {
        $("link.alt").attr("href", $(this).attr("rel"));
        /*
        $.cookie("css", $(this).attr('rel'), {
            expires: 365,
            path: '/'
        });
        */
        return false;
    });
    imgPathStart = "images/pattern/";
    imgPathEnd = new Array("pattern0.png", "pattern1.png", "pattern2.png", "pattern3.png", "pattern4.png", "pattern5.png", "pattern6.png", "pattern7.png", "pattern8.png", "pattern9.png");
    $(".background-selector li img").click(function() {
        backgroundNumber = $(this).attr("data-nr");
        $("body").css({
            background: "url('" + imgPathStart + imgPathEnd[backgroundNumber] + "')"
        })
    })
});
