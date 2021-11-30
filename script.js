var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScrollReveal().reveal(".swiper-wrapper", { delay: 500 });
ScrollReveal().reveal(".right", { delay: 1000 });
ScrollReveal().reveal(".left", { delay: 1000 });

$("#left").click(() => new Audio("button.mp3").play());
$("#right").click(() => new Audio("button.mp3").play());
