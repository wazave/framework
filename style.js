/* eslint-disable no-undef */
$(document).ready(() => {
  $('.img-select2').css('display', 'none');
  headerFunc();
  adjustLogo();
});

function headerFunc () {
  $('.img-select, .img-select2').hover(() => {
    $('.img-select').css('display', 'none');
    $('.img-select2').css('display', 'block');
    $('.text-big').css('color', '#C8C7C6'); // #9A999E $('body').css('color')
  }, () => {
    $('.img-select').css('display', 'block');
    $('.img-select2').css('display', 'none');
    $('.text-big').css('color', '');
  });
  $(window).resize(() => {
    adjustLogo();
  });
  console.log($('header').height());
  $('body').css('padding-top', $('header').height() + 24);

  $('#hamburger-menu').click(() => {
    console.log($('a .hide'));
    if ($('a .hide .show').length > 0) {
      $('a .hide .show').removeClass('show');
    } else {
      $('a .hide').addClass('show');
    }
  });
}

function adjustLogo () {
  if ($(window).width() < 768) {
    $('#header-logo').addClass('horizontal-left');
  } else {
    $('#header-logo').removeClass('horizontal-left');
  }
}
