;(function(window, $) {
  var $navBtn = $('.nav-icon')
  var $navWrap = $('.nav-wrap')

  $navBtn.on('click', function() {
    var isShow = $navWrap.hasClass('show')
    if (isShow) {
      $navWrap.removeClass('show')
    } else {
      $navWrap.addClass('show')
    }
  })
})(window, $)
