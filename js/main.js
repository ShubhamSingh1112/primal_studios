
// navbar sticky scroll
$(document).scroll(function () {
    var $nav = $(".navbar-scroller");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
// active menu
const path = window.location.href; $('.nav-item a').each(function () {
    if (this.href == path) {
        $(this).addClass('active');
    }
});
// Isotope Active Masonry Gallery
$('.gallery-items').imagesLoaded(function () {
    $('.gallery-filter li').on('click', function () {
        $(".gallery-filter li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".gallery-items").isotope({
            filter: selector
            , animationOptions: {
                duration: 750
                , easing: 'linear'
                , queue: false
                ,
            }
        });
        return false;
    });
    $(".gallery-items").isotope({
        itemSelector: '.single-item'
        , layoutMode: 'masonry'
        ,
    });
});

// testimonial Slider
$(document).ready(function () {
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    // blog-slider
    $(".blog-slider").slick({
        // Customize settings as needed
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        cssEase: "linear",
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".team-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
});

// Scroll Event
$(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".back-to-top").addClass("active");
    if (scrolled < 300) $(".back-to-top").removeClass("active");
});

// Click Event
$(".back-to-top").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: "0",
        },
        1200
    );
});

Fancybox.bind('[data-fancybox="responsive"]', {
    // Your custom options for a specific gallery
});

Fancybox.bind('[data-fancybox="video-box"]', {
    // Your custom options for a specific gallery
});

// Function to start counting when element is visible
function startCounterWhenVisible() {
    const counters = document.querySelectorAll(".counter-text span");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.dataset.count);
                let currentCount = 0;
                const increment = Math.ceil(countTo / 100); // Change speed of counting here

                const timer = setInterval(() => {
                    currentCount += increment;
                    if (currentCount >= countTo) {
                        clearInterval(timer);
                        currentCount = countTo;
                    }
                    target.textContent = currentCount;
                }, 30); // Change refresh rate here

                observer.unobserve(target);
            }
        });
    }, options);

    counters.forEach((counter) => {
        observer.observe(counter);
    });
}

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", startCounterWhenVisible);



