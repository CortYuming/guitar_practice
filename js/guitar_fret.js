$(function(){
  var $major_of_mode = $('.js-major_of_mode');
  var $minor_of_mode = $('.js-minor_of_mode');
  var major_in_mode_scales = ['ionian', 'lydian', 'mixolydian'];
  var minor_in_mode_scales = ['dorian', 'phrygian', 'aeolian', 'locrian'];

  function toggle_mode_scale(obj, mode_scales) {
    obj.click(function(event) {
      var scale;
      event.preventDefault();

      for (scale of mode_scales) {
        $('.js-' + scale).toggle();
      }

      if (obj.css('opacity') === '1') {
        obj.css('opacity', 0.1);
      } else {
        obj.css('opacity', 1);
      }
    });
  }

  toggle_mode_scale($major_of_mode, major_in_mode_scales);
  toggle_mode_scale($minor_of_mode, minor_in_mode_scales);
});
