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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });
      var swiper = new Swiper(".swiper-kegiatan", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-kegiatan-button-next",
          prevEl: ".swiper-kegiatan-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
 });