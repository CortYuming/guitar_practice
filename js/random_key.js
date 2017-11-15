$(function(){
  var tempo = 50;
  var delay = 60 / tempo * 1000;

  function set_display_key_width() {
    var screen_width = $(window).width();
    var $key = $('.js-key');
    $key.css('width', screen_width);
  }
  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function display_key() {
    var keys = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    var parameter = location.search.split('q=')[1];

    if (parameter) {
      keys =  parameter.split(',');
      keys = keys.map(function(key) {
        return decodeURI(key);
      });
    } else {
      keys = keys.map(function(key) {
        return key.replace(/(.+?\/)/g, '<span style="color:#eee;">$1</span>');
      });
    }

    $('.js-key').html(
      random(keys)
    );
  }

  set_display_key_width();
  display_key();
  setInterval(function(){
    display_key();
  }, delay);
});
