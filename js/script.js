$(document).ready(function(){
$(".show-pop-up-infak").click(function(){
  $(".wriper-popup").addClass("show")
})

$(".backdrop").click(function(){
  $(".wriper-popup").removeClass("show")

})



    $(".hamburger").click(function(){
     $(".top-menu").css("right","0");
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 });