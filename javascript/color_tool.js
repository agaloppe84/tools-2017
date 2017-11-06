
function randomNumber() {
  var number = Math.floor((Math.random() * 255) + 1);
  return number;
};

function randomColor() {
  var color = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  return color;
};


function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}


function betterCoolors() {
  var numbers = numberRange(1, 530);
  var colors = [];
  numbers.forEach(function(element) {
    colors.push(randomColor());
  });
  colors.forEach(function(truecolor) {
    var currentCircle =  ($("<div/>").attr('class','circle')).css('background-color', truecolor);
    $(currentCircle).appendTo('.colorpicker');
  });
};

betterCoolors();

$('.trigger').click(function() {
  $('.colorpicker').empty();
  betterCoolors();
});




$('.colorpicker').on('click', '.circle', function () {
  $(this).toggleClass('active');
  $('.circle').not(this).removeClass('active');
  var activeColor = $(this).css('background-color');
  $('#color-input').val(activeColor);
  $('#color-input').css('background-color', activeColor);
  $('.bottom').css('color', activeColor);
  $('.circle-conf').css('background-color', activeColor);

  var rgbToHex = x => '#' + x.match(/\d+/g).map(y = z => ((+z < 16)?'0':'') + (+z).toString(16)).join('');
  var convertedColor = rgbToHex(activeColor);

  var n_match  = ntc.name(convertedColor);
  n_rgb        = n_match[0]; // This is the RGB value of the closest matching color
  n_name       = n_match[1]; // This is the text string for the name of the match
  n_exactmatch = n_match[2]; // True if exact color match, False if close-match

  $('.bottom').text(n_name);
  $('.comparison-1').text(n_exactmatch);
  $('.display').css("border-color", activeColor);
  $('.comparison-1').css("color", activeColor);
  $('.comparison-2').css("background-color", n_rgb);
  $('.comparison-2-bis').css("background-color", activeColor);
  $('.comparison-3').text(convertedColor);
  $('.comparison-3').css("color", activeColor);
});



