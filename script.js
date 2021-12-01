(function () {
  var slideContainer = $(".slide-container");

  slideContainer.slick();

  $(".card__image img").hide();
  $(".slick-active").find(".card img").fadeIn(200);

  // On before slide change
  slideContainer.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-active").find(".card img").fadeOut(1000);
    }
  );

  // On after slide change
  slideContainer.on("afterChange", function (event, slick, currentSlide) {
    $(".slick-active").find(".card img").fadeIn(200);
  });
})();

$(window).load(function () {
  $(".status").fadeOut();
  $(".preloader").delay(50).fadeOut(1000);
  $("body").delay(50).css({ overflow: "visible" });
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
