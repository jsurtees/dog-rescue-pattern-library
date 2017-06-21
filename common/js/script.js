$(document).ready(function() {
  $('.nav-open').hide();
});

$('.nav-close').click(function() {
  $('.nav-close').hide();
  $('.nav-open').show();
  $('.primary-nav').fadeIn(500);
  $('body, html').css('overflow-x', 'hidden');
});

$('.nav-open').click(function() {
  $('.nav-close').show();
  $('.nav-open').hide();
  $('.primary-nav').fadeOut(500);
  $('body, html').css('overflow-y', 'auto');
});

$('.nav-btn-square').mouseenter(function() {
  $(this).siblings('.icon-holder').children('.icon').removeClass('icon-hover-off');
  $(this).siblings('.icon-holder').children('.icon').addClass('icon-hover-on');
  $(this).siblings('.icon-holder').children('.icon').css({transform: 'scale(1.25) translateY(-10px)'});
});

$('.nav-btn-square').mouseleave(function() {
  $(this).siblings('.icon-holder').children('.icon').removeClass('icon-hover-on');
  $(this).siblings('.icon-holder').children('.icon').addClass('icon-hover-off');
  $(this).siblings('.icon-holder').children('.icon').css({transform: 'scale(1) translateY(0px)'});
});
