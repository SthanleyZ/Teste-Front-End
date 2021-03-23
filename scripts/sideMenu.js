$(document).ready(function () {
  $('.hamburguer').click(function () {
    $('.sideMenu').css('left', 0);
    $('.sideMenu').addClass('open');
    $('.sideMenu').removeClass('closed');
  });
  $('.close').click(function () {
    $('.sideMenu').css('left', -275);
    $('.sideMenu').addClass('closed');
    $('.sideMenu').removeClass('open');
  });
  $(document).on('click', function (e) {
    let check = e.target.closest('#sideMenu');
    let menuCheck = check ? true : false
    if ($('#sideMenu').hasClass('open') && menuCheck === false && !e.target.closest('.hamburguer')) {
      $('.sideMenu').css('left', -275);
    }
  });
})
