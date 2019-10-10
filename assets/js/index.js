;(function(window, $) {
  var $navBtn = $('.nav-icon')
  var $navLeft = $('.nav-left')
  var $navWrap = $('.nav-wrap')
  var $btn1 = $('#clickBtn1')
  var $btn2 = $('#clickBtn2')
  var $dialog = $('.dialog')
  var $dialogMask = $('.dialog-mask')
  var $dialogContent = $('#dialogImg')

  $btn1.on('click', function() {
    $dialog.addClass('show')
    $dialogContent.attr('src', '../assets/image/home/gsw.jpg')
  })

  $btn2.on('click', function() {
    $dialog.addClass('show')
    $dialogContent.attr('src', '../assets/image/home/lxs.jpg')
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
