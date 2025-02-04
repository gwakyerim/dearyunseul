console.log('[common.js] loaded!');

const eventSlider = new Swiper('.event-list .swiper-container', {
    centeredSlides: false, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복재생
    autoplay: {
    delay: 5000
    }, // 자동재생
    navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
    },
    breakpoints: {
        // 화면의 넓이가 375px 이상일 때
        768 : {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        // 화면의 넓이가 640px 이상일 때
        768 : {
            slidesPerView: 2,
            spaceBetween: 16,
        },
         // 화면의 넓이가 1440px 이상일 때
        1440: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
      }
})

// talklist 스크롤 이벤트 구현하기
const talk = document.querySelector('.talk-list');
window.addEventListener('scroll',function(){
    const position = talk.getBoundingClientRect();

    if (position.top < this.window.innerHeight && position.bottom >=0) {
        talk.classList.add('active');
    } else {
        talk.classList.remove('active');
    }
});

// talklist 스크롤 이벤트 구현하기
const job = document.querySelector('.job-list');
window.addEventListener('scroll',function(){
    const position2 = job.getBoundingClientRect();

    if (position2.top < this.window.innerHeight) {
        job.classList.add('active');
    } else {
        job.classList.remove('active');
    }
});

// 모바일 메뉴(drawer) 클릭 이벤트 구현하기
const drawer = document.querySelector('.drawer');
const drawerClose = document.querySelector('.drawer-x')
const mobileNav = document.querySelector('.mobile-nav');

drawer.addEventListener('click', function() {
    mobileNav.classList.add('active');
})
drawerClose.addEventListener('click', function() {
    mobileNav.classList.remove('active');
})
