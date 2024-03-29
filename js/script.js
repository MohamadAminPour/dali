//////////////////////////////////title_writer//////////////////////////////////

var title_writer = document.querySelector('.landing-page__subtitle');
var h2typewriter = new Typewriter(title_writer, {
    loop: true
});

h2typewriter.typeString('تولید و ارائه کننده انواع قلمو های نقاشی')
    .pauseFor(2000)
    .deleteAll()
    .typeString('با دالی قدرت خلاقیت را به زندگی ببخشید')
    .pauseFor(2000)
    .deleteAll()
    .typeString('دالی ، قلمویی که خلاقیت را به زبان آورد')
    .pauseFor(2000)
    .deleteAll()
    .typeString('در قلمو دالی ، خلاقیت در جریان است')
    .pauseFor(2000)
    .deleteAll()
    .start();

////////////////////////////////menu-center item////////////////////////////////

let menu_items = document.querySelectorAll('.menu-center__link')

function activeLink() {
    menu_items.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
menu_items.forEach((item) =>
    item.addEventListener('click', activeLink));

/////////////////////////////////menu fix top//////////////////////////////////

let menu = document.querySelector('.menu')

function scrollHandler() {
    if (document.documentElement.scrollTop < 0) {
        menu.classList.add('active1')
        menu.classList.remove('active2')
    }
    else if (document.documentElement.scrollTop > 700) {
        menu.classList.add('active2')
        menu.classList.remove('active1')
    }
    else {
        menu.classList.remove('active2')
    }
}

///////////////////////////////////popular product////////////////////////////
$('.owl-carousel').owlCarousel({
    loop: true, // boolean
    margin: 10,
    center: true,
    lazyLoad: true,
    nav: true, // Boolean
    dots: false, // Boolean
    autoplay: true, // Boolean
    autoplayTimeout: 4000, // Number
    center: true, // Boolean
    rtl: true, // Boolean
    smartSpeed: 3000, // Boolean
    items: 4, // Number
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

