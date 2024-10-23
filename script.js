var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
    centerSlide: "true",
    grabCursor:"true",
    fade:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".right-arrow",
      prevEl: ".left-arrow",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });