;(function(window, $) {
  var $navBtn = $('.nav-icon')
  var $navLeft = $('.nav-left')
  var $navWrap = $('.nav-wrap')
  var $btn = $('.btn')
  var $dialog = $('.dialog')
  var $dialogMask = $('.dialog-mask')

  $btn.on('click', function() {
    $dialog.addClass('show')
  })

  $dialogMask.on('click', function(e) {
    $dialog.removeClass('show')
    e.stopPropagation()
  })

  $navBtn.on('click', function() {
    var isShow = $navWrap.hasClass('show')
    if (isShow) {
      $navWrap.removeClass('show')
    } else {
      $navWrap.addClass('show')
    }
  })

  $navLeft.on('click', function() {
    var isShow = $navWrap.hasClass('show')
    if (isShow) {
      $navWrap.removeClass('show')
    } else {
      $navWrap.addClass('show')
    }
  })
})(window, $)
