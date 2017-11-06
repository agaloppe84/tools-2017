
// Color and background color changes when scrolling - Add 'color-change' class when scrolling //

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar-scroll').addClass('color-change');
    $('.navbar-scroll a').addClass('color-text-change');
  } else {
    $('.navbar-scroll').removeClass('color-change');
    $('.navbar-scroll a').removeClass('color-text-change');
  }
});


// Shape changes when scrolling - Add 'shape-change' class when scrolling //

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar-scroll').addClass('shape-change');
  } else {
    $('.navbar-scroll').removeClass('shape-change');
  }
});


// Hide when scrolling - Add 'hidden' class when scrolling //

// $(window).scroll(function() {
//   if ($(document).scrollTop() > 100) {
//     $('.navbar-scroll').hide();
//   } else {
//     $('.navbar-scroll').show();
//   }
// });
