$(function(){
  var tempo = 50;
  var delay = 60 / tempo * 1000;

  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function display_key() {
    var keys = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    var key = random(keys).replace(/(.+?\/)/g, '<span style="color:#eee;">$1</span>');
    $('.js-key').html(key);
  }
  
  display_key();
  setInterval(function(){
    display_key();
  }, delay);
});
