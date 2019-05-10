$(document).ready(function () {
  var params = {}
  window.location.href.replace(/([^?&]+)=([^&]+)/g, (_,k,v) => params[k]=v)
  console.log(params)

  var swiperArg = {
    effect : 'fade',
    fadeEffect: {
      crossFade: true
    }
  }
  $('.captain-menu li').click(function () {
    let idx = $(this).index()
    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active')
    mySwiper.slideTo(idx)
  })
  $('.capton-menu').click(function (e) {
    e.stopPropagation()
    $('.captain').addClass('open-captain')
  })
  $('.swiper-tab .img-slot').click(function (e) {
    e.stopPropagation()
    let str = $(this).parent().attr('swiper')
    let idx = $(this).index()
    console.log(str)
    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active')
    map[str].slideTo(idx)
  })
  $(document).click(function() {
    $('.captain').removeClass('open-captain')
  })
  var mySwiper = new Swiper('#swiper',swiperArg)
  var signSwiper = new Swiper('#signSwiper',swiperArg)
  var packSwiper = new Swiper('#packSwiper',swiperArg)
  var cdnSwiper = new Swiper('#cdnSwiper',swiperArg)
  var map = {
    signSwiper: signSwiper,
    packSwiper: packSwiper,
    cdnSwiper: cdnSwiper
  }

  if (params.idx && $('.captain-menu li').eq(params.idx)[0]) {
    $('.captain-menu li.active').removeClass('active')
    $('.captain-menu li').eq(params.idx).addClass('active')
    mySwiper.slideTo(params.idx)
  }
})
