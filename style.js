/* eslint-disable no-undef */
$(document).ready(() => {
  $('.img-select2').css('display', 'none');
  headerFunc();
});

function headerFunc () {
  $('.img-select, .img-select2').hover(() => {
    $('.img-select').css('display', 'none');
    $('.img-select2').css('display', 'block');
    $('.tbig').css('color', '#C8C7C6'); //#9A999E $('body').css('color')
  }, () => {
    $('.img-select').css('display', 'block');
    $('.img-select2').css('display', 'none');
    $('.tbig').css('color', 'inherit');
  });
  // $('.tbig').hover((e) => {
  //   $('.tbig').css('color', '#C8C7C6');
  //   $(e.target).css('color', 'inherit');
  // }, () => {
  //   $('.tbig').css('color', 'inherit');
  // });
}



// $(window).resize(adjustHeader);

// function adjustHeader() {
//   console.log('ki')
//   let height = $('#headr').height();
//   $('#content').css('padding-top', height);
// };