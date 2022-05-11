document.addEventListener("DOMContentLoaded", function () {
    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", "a", function (event) {
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

    //телефон
    window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll('.tel'), function (input) {
            var keyCode;

            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function (a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5) this.value = ""
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });

    });

    //слайдеры
    var swiper = new Swiper(".main__slider", {
        slidesPerView: 4,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 4,
            },
        }
    });

    var swiper = new Swiper(".videos__slider", {
        slidesPerView: 6,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            581: {
                slidesPerView: 6,
            },
        }
    });

    var swiper = new Swiper(".gallery-modal__slider", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //табы
    (function ($) {
        // $('.tab .tab__tabs').addClass('active').find('> .tab__tab:eq(0)').addClass('active');

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


})

