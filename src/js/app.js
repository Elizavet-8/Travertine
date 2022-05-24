document.addEventListener("DOMContentLoaded", function () {
    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", ".header-nav__link_close", function (event) {
        $('.header').removeClass('show');
        $('body').removeClass('overflow');
    });

    //плавный скролл
    $("body").on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //слайдеры
    var main__slider = new Swiper(".main__slider", {
        slidesPerView: 2,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            361: {
                slidesPerView: 3,
            },
            581: {
                slidesPerView: 4,
            },
        }
    });
    var recommendations__slider = new Swiper(".recommendations-slider__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".recommendations-slider__btn-next",
            prevEl: ".recommendations-slider__btn-prev",
        },
        pagination: {
            el: ".recommendations-slider__pagination",
            clickable: true,
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
            },
            999: {
                slidesPerView: 3,
            },
        }
    });

    var videos__slider = new Swiper(".videos__slider", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            581: {
                slidesPerView: 6,
            },
        }
    });

    var gallery__slider = new Swiper(".gallery-modal__slider", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var useful__slider = new Swiper(".useful__slider", {
        slidesPerView: 1,
        grid: {
            rows: 3,
        },
        pagination: {
            el: ".useful__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
            },
            999: {
                slidesPerView: 3,
            },
        }
    });

    var product__preview = new Swiper(".product-preview__slider", {
        spaceBetween: 8,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var product__slider = new Swiper(".product__slider", {
        spaceBetween: 8,
        thumbs: {
            swiper: product__preview,
        },
    });
    //повторяющийся слайдер

    var products = new Swiper(".products__slider-1", {
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
            clickable: true,
            el: ".products__pagination-1",
        },
        debugger: true,
        loop: true
    });

    var products = new Swiper(".products__slider-2", {
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
            clickable: true,
            el: ".products__pagination-2",
        },
        debugger: true,
        loop: true
    });


    //табы
    (function ($) {
        $('.tab .tab__tabs .tab__tab').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('.tab__tab').index();

            tab.find('.tab__tabs > .tab__tab').removeClass('active');
            $(this).closest('.tab__tab').addClass('active');

            tab.find('.tab__content').find('.tab__block').not('.tab__block:eq(' + index + ')').slideUp();
            tab.find('.tab__content').find('.tab__block:eq(' + index + ')').slideDown();

            g.preventDefault();
        });
    })(jQuery);

    //аккардион
    $(".usage-accordion__head.active").next(".usage-accordion__body").slideDown();
    $('.usage-accordion').on('click', '.usage-accordion__head', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass("active")
            .next('.usage-accordion__body')
            .not(':animated')
            .slideToggle();
    })

    //модалки
    $("#kitchen-modal").wgModal({
        triggerElement: '.kitchen-open-modal',
    });

    $("#projects-inside-modal").wgModal({
        triggerElement: '.projects-inside-open-modal',
    });

    $("#recommendations-modal").wgModal({
        triggerElement: '.recommendations-open-modal',
    });
})

