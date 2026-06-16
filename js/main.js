(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Sticky Call & WhatsApp buttons (injected for conversions)
(function(){
    function createStickyButtons(){
        if(document.getElementById('thaza-sticky-cta')) return;
        var container = document.createElement('div');
        container.id = 'thaza-sticky-cta';
        container.style.position = 'fixed';
        container.style.right = '16px';
        container.style.bottom = '16px';
        container.style.zIndex = '9999';
        container.innerHTML = '\n+            <a href="tel:+919952666673" class="btn btn-success d-inline-flex align-items-center mb-2" style="border-radius:50px;padding:12px 16px;box-shadow:0 6px 18px rgba(0,0,0,.12);">\n+                <i class="fa fa-phone me-2"></i> Call\n+            </a>\n+            <a href="https://wa.me/919952666673" target="_blank" rel="noopener" class="btn btn-success d-inline-flex align-items-center" style="border-radius:50px;padding:12px 16px;box-shadow:0 6px 18px rgba(0,0,0,.12);background:#25D366;border-color:#25D366;">\n+                <i class="fab fa-whatsapp me-2"></i> WhatsApp\n+            </a>';
        document.body.appendChild(container);
    }
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createStickyButtons); else createStickyButtons();
})();

