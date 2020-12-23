function initSlider() {
    new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

function toggleMenu() {
    const menuToggle = document.getElementsByClassName('toggle');
    
    for (menu of menuToggle) {
        menu.classList.toggle('active');
    } 

    const navigationToggle = document.getElementsByClassName('navigate-mobile')[0]

    navigationToggle.classList.toggle('active');
}

initSlider();
