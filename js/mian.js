$(document).ready(function() {
  $('#getRandom').click(function() {
    let start = Number($('#start').val());
    let end = Number($('#end').val());
    let random = getRandomInt(start, end);
    $('#result').html(random);
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
});
