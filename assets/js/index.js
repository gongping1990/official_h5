;(function(window, $) {
  var $btn = $('.btn')
  var $navBtn = $('.nav-icon')
  var $navLeft = $('.nav-left')
  var $navWrap = $('.nav-wrap')
  var $dialog = $('.dialog')
  var $dialogMask = $('.dialog-mask')
  var $dialogImg = $('.dialog-img')

  $btn.on('click', function() {
    var attr = $(this).attr('data-name')
    $dialogImg.removeClass('show')
    $dialogImg.filter('.' + attr).addClass('show')
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
