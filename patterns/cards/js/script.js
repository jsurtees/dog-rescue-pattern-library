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

$('.nav-btn-square').click(function() {
  alert('suh dude');
})
