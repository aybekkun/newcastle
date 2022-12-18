$(function () {
  $(".swiper-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
  });
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content [data-tab-index]").hide();

  $(".tab-content [data-tab-index='1']").show();
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content  [data-tab-index]").hide();

    let activeTab = $(this).attr("data-tab");

    $(`.tab-content [data-tab-index=${activeTab}]`).fadeIn();
    return false;
  });

  $(".test__box").hide();
  $(".test__btn").click(function (e) {
    e.preventDefault();
    $(".test__start").hide();
    $(".test__box").fadeIn();
    return false;
  });
  $(".accordion").click(function () {
    $(".accordion").removeClass("active");
    $(this).addClass("active");

    return false;
  });

  $(".menu").click(function () {
    $(".menu").toggleClass("active");
    $("nav").toggleClass("active");
  });
});
