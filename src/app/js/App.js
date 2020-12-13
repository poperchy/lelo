    jQuery(function ($) {
        $("#user_phone").mask("+375 (99) 999-99-99", {autoclear: false});
    });
    (function ($) {
        var jsBtn = $('.js-btn');
        var modalO = $('.overlay');
        var closeModal = $('.modal-close');
        var modal = $('.modal');


        jsBtn.on('click', function (e) {
            e.preventDefault();
            modalO.toggleClass('overlay--active');
            $('body').toggleClass('body--hidden');
        });
        $('.modal-close--send').on('click', function () {
            $('.overlay__send').css('display', 'none');

        });
        $(document).mouseup(function (e) {
            var container = $('.modal');
            if (container.has(e.target).length === 0){
                modalO.removeClass('overlay--active');
                $('.overlay__send').css('display', 'none');
                $('body').removeClass('body--hidden');
            }
        });
        closeModal.on('click', function () {
            modalO.removeClass('overlay--active');
            $('body').removeClass('body--hidden');
        });
        var allPanels = $('.questions__list > div > dd').hide();

        var Panels = $('.dd-active').show();
        $('.questions__list> div > dt > .show-more').click(function () {

            allPanels.slideUp();
            $(this).parent().next().slideDown();
            $('.show-more-b').removeClass('show-more--active')
            return false;
        });

        $('.show-more-b').click(function () {
            $(this).toggleClass('show-more--active');
        });


    })(jQuery);

window.onload = function () {
    $(".ripple").on("click", function (event) {
        $(this).append("<span class='ripple-effect'>");
        $(this).find(".ripple-effect").css({
            left: event.pageX - $(this).position().left,
            top: event.pageY - $(this).position().top
        }).animate({
            opacity: 0,
        }, 1500, function () {
            $(this).remove();
        });
    });

    var burger = document.querySelector('.btn--burger');
    var navMenu = document.querySelector('.nav');
    var bodyL = document.querySelector('body');
    var mobLink = document.querySelectorAll('.nav__item a');
    mobLink.forEach(function (item) {
        item.addEventListener('click', function () {
            navMenu.classList.remove('nav--active');
            burger.classList.remove('btn--burger-active');
            bodyL.classList.remove('body--hidden');

        })
    });

    burger.addEventListener('click', function () {
        navMenu.classList.toggle('nav--active');
        burger.classList.toggle('btn--burger-active');
        bodyL.classList.remove('body--hidden');
    });

}();

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    }
});


$(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn - 100}, 1000);

    });
});
