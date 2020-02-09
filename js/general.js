/**
 * @author Sergey Nizhnik <kroloburet@gmail.com>
 */

$(function() {

  //загрузка альтернативного изображения
  $('img').on('error', function() {
    $(this).attr('src', 'img/noimg.svg').width(36);
  });

});
