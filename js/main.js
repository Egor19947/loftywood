$(function () {

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 30) $(".header-bottom").css({ position: 'fixed' }).addClass('header-bottom--shadow');
    else  $(".header-bottom").css({ position: 'relative' }).removeClass('header-bottom--shadow');
  });

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 134) $(".pay__sidebar-wrapper").addClass('pay__sidebar-wrapper--fix');
    else $(".pay__sidebar-wrapper").removeClass('pay__sidebar-wrapper--fix');
  });

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 104) $(".pay__sidebar-wrapper").addClass('pay__sidebar-wrapper--fixMobile');
    else $(".pay__sidebar-wrapper").removeClass('pay__sidebar-wrapper--fixMobile');
  });

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 30) $(".main").addClass('main--down');
    else  $(".main").removeClass('main--down');
  });

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 30) $(".search__box").addClass('search__box--down');
    else  $(".search__box").removeClass('search__box--down');
  });

  $('.menu').on('click', function () {
    $(this).toggleClass('menu--active');
    $('.menu-page').toggleClass('menu-page--active');
    $('body').toggleClass('body--fixed');
    $('body').removeClass('body--fix');
    $('.search').removeClass('search--active');
    $('.breadcrumbs').removeClass('breadcrumbs--down');
    $('.objects__items').removeClass('objects__items--down');
    $('.filter').removeClass('filter--active');
    $('.wrapper').removeClass('wrapper--fix');
  });

  $('.cart-wrapp').on('click', function () {
    $('.menu-page').removeClass('menu-page--active');
    $('.search').removeClass('search--active');
    $('body').removeClass('body--fixed');
    $('.menu').removeClass('menu--active');
    $('.objects__items').removeClass('objects__items--down');
    $('.pay').removeClass('pay--down');
  });

  $('.search__close').on('click', function () {
    $('.search').removeClass('search--active');
    $('.objects__items').removeClass('objects__items--down');
    $('.breadcrumbs').removeClass('breadcrumbs--down');
    $('.pay').toggleClass('pay--down');
  });

  $('.header-bottom__search').on('click', function () {
    $('.search').toggleClass('search--active');
    $('.objects__items').toggleClass('objects__items--down');
    $('.breadcrumbs').toggleClass('breadcrumbs--down');
    $('.menu-page').removeClass('menu-page--active');
    $('.menu').removeClass('menu--active');
    $('body').removeClass('body--fixed');
    $('.filter').removeClass('filter--active');
    $('body').removeClass('body--fix');
    $('.wrapper').removeClass('wrapper--fix');
    $('.pay').toggleClass('pay--down');
  });

  $('.filter__menu-btn').on('click', function () {
    $('.filter').addClass('filter--active');
    $('.wrapper').toggleClass('wrapper--fix');
    $('.search').removeClass('search--active');
    $('.breadcrumbs').removeClass('breadcrumbs--down');
  });

  $('.filter__mobile-close').on('click',function () {
    $('.filter').removeClass('filter--active');
    $('.wrapper').removeClass('wrapper--fix');
  });

  $('.filter__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.footer-top__item-title--mobile').on('click', function () {
    $(this).toggleClass('footer-top__item-title--active').next().slideToggle();
  });

  $('.slider__items').slick({
    arrows: false,
    dots: true,
    fade: true
  });
  $('.objects__items').slick({
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 733,
        settings: {
          slidesToShow: 2,
          variableWidth: true
        }
      },
      {
        breakpoint: 462,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });

  $('.popular__item-images').slick({
    arrows: false,
    dots: true
  });

  $('.news__items').slick({
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product__slideSmall').slick({
    asNavFor: '.product__slideBig',
    draggable: false,
    focusOnSelect: true,
    slidesToShow: 3,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 951,
        settings: {
          vertical: false,
          draggable: true
        }
      }
    ]
  });

  $('.product__slideBig').slick({
    asNavFor: '.product__slideSmall',
    draggable: false,
    fade: true,
    arrows: false,
    swipe: false
  });

  $('.popular__item-input').styler();
  $('.find__top-select').styler();

  $('.popular__item-cart').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('none').next().addClass('none').next().addClass('active')
  })

  $('.filter__price-input').ionRangeSlider({
    type: 'double'
  });

  $('.news-page__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.news-page__tabs-link').removeClass('news-page__tabs-link--active');
    $(this).addClass('news-page__tabs-link--active');
    $('.news-page__content-items').removeClass('news-page__content-items--active');
    $($(this).attr('href')).addClass('news-page__content-items--active');
  });

  $('.pay__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.pay__tabs-link').removeClass('pay__tabs-link--active');
    $(this).addClass('pay__tabs-link--active');
    $('.pay__content-item').removeClass('pay__content-item--active');
    $($(this).attr('href')).addClass('pay__content-item--active');
  });

  $('.pay__city').on('click', function () {
    $('.popup').addClass('popup--active');
    $('body').addClass('body--fix');
  });

  $('.popup__close').on('click', function () {
    $('.popup').removeClass('popup--active');
    $('body').removeClass('body--fix');
  });

  $('.pay__modal-link').on('click', function (e) {
    e.preventDefault()
    $('.pay__map-wrapp').addClass('pay__map-wrapp--none');
    $('.pay__map-wrapper').addClass('pay__map-wrapper--block');
  });

  $('.pay__map-itemlink').on('click', function (e) {
    e.preventDefault()
    $('.pay__map-wrapp').removeClass('pay__map-wrapp--none');
    $('.pay__map-wrapper').removeClass('pay__map-wrapper--block');
  });

});

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);

  $('.pay__tabs-link1').on('click', function () {
    $('.select__box').removeClass('select--block');
    $(this).parents('.dropdown').find('.select__box1').addClass('select--block');
  });

  $('.pay__tabs-link2').on('click', function () {
    $('.select__box').removeClass('select--block');
    $(this).parents('.dropdown').find('.select__box2').addClass('select--block');
  });

  $('.pay__tabs-link3').on('click', function () {
    $('.select__box').removeClass('select--block');
    $(this).parents('.dropdown').find('.select__box').addClass('select--block');
  });

  $('.pay__tabs-link3').on('click', function () {
    $('.select__box').removeClass('select--block');
    $(this).parents('.dropdown').find('.select__box').addClass('select--block');
  });

});
$('.pay__check-select').styler();

var $range = $("#example_2");
var $inputFrom = $("#example_2_input_from");
var $inputTo = $("#example_2_input_to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    $('.cart-wrapp').on('click', function () {
      $('.cart').toggleClass('cart--active');
    });
    var div = $(".cart");
    if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      div.removeClass('cart--active'); 
    }
  });
});