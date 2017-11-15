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
    var parameter = location.search.split('q=')[1];
    var init_keys = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B'];
    var keys = [];

    keys = init_keys.map(function(key) {
      return key.replace(/(.+?\/)/g, '<span style="color:#eee;">$1</span>');
    });

    if (parameter) {
      keys =  parameter.split(',');
      keys = keys.map(function(key) {
        return decodeURI(key);
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
