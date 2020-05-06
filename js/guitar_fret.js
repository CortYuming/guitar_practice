/*global $*/
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

  function display_select_keys() {
    var notes = ['1', 'b9', '9', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', 'M7'];
    var ignore_notes = {
      'chromatic': [],
      'c': ['1', '9', '3', '4', '5', '6', 'M7'],
      'd_b': ['b9', 'b3', '4', 'b5', 'b6', 'b7', '1'],
      'd': ['9', '3', 'b5', '5', '6', 'M7', 'b9'],
      'e_b': ['b3', '4', '5', 'b6', 'b7', '1', '9'],
      'e': ['3', 'b5', 'b6', '6', 'M7', 'b9', 'b3'],
      'f': ['4', '5', '6', 'b7', '1', '9', '3'],
      'g_b': ['b5', 'b6', 'b7', 'M7', 'b9', 'b3', '4'],
      'g': ['5', '6', 'M7', '1', '9', '3', 'b5'],
      'a_b': ['b6', 'b7', '1', 'b9', 'b3', '4', '5'],
      'a': ['6', 'M7', 'b9', '9', '3', 'b5', 'b6'],
      'b_b': ['b7', '1', '9', 'b3', '4', '5', '6'],
      'b': ['M7', 'b9', 'b3', '3', 'b5', 'b6', 'b7'],
    }
    var $note_names = $('.note_names')

    $('.select-keys').change(function(){
      var key = $(this).val();
      var remove_notes = notes.filter(n => !ignore_notes[key].includes(n));

      notes.forEach(function(note) {
        $($note_names.find(`td.n_${note} > span`)).css('opacity', '1')
      })
      if (key === 'chromatic') {
        return;
      }
      remove_notes.forEach(function(note) {
        $($note_names.find(`.n_${note} > span`)).css('opacity', '0.15')
        console.info(`.n_${note} > span`)
       })
    });
  }

  toggle_mode_scale($major_of_mode, major_in_mode_scales);
  toggle_mode_scale($minor_of_mode, minor_in_mode_scales);
  display_select_keys()
});
