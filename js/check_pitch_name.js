$(function(){
  var $fret_line;
  var span_hightlight = '<span class="js-fret_hightlight">';
  var span_hightlight_close = '</span>';
  var join_fret_str = '+';
  var screen_width = window.parent.screen.width;
  var random = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  var set_random_hightlight = function(fret_line, fret_num) {
    var fret_line_list = fret_line.split(join_fret_str);
    var i;

    for (i = 0; i < fret_line_list.length; i++) {
      if (i === fret_num) {
        fret_line_list[fret_num] = [span_hightlight, fret_line_list[fret_num], span_hightlight_close].join('');
      }
    }
    return fret_line_list.join(join_fret_str);
  };
  var random_hightlight = function() {
    var $pitch_names_off = $('.pitch_names_off li:not(.fret_number)');

    if ($fret_line) {
      // remove hightlight
      $fret_line.html($fret_line.html().replace(span_hightlight, '').replace(span_hightlight_close, ''));
    }
    // set hight_light
    $fret_line = $(random($pitch_names_off));

    $fret_line.html(
      set_random_hightlight($fret_line.text(), random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
    );
  };
  var move_fret_position = function() {
    var $hightlight = $('.js-fret_hightlight');
    if ($hightlight.offset() && $hightlight.offset().left) {
      scrollTo(
        $hightlight.offset().left,
        0
      );
    }
  };
  var toggle_display = function() {
    var $pitch_names_on = $('.pitch_names_on');
    var $pitch_names_off = $('.pitch_names_off');

    $pitch_names_on.click(function() {
      $pitch_names_on.toggle();
      $pitch_names_off.toggle();

      move_fret_position();
    });
    $pitch_names_off.click(function() {
      $pitch_names_on.toggle();
      $pitch_names_off.toggle();
      random_hightlight();
    });

  };
  var main = function() {
    toggle_display();
    random_hightlight();
    move_fret_position();
  };


  main();
});
