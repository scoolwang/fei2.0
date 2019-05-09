$('#more').click(function (e) {
  e.stopPropagation()
  let status = $('#headerMenu').hasClass('open-menu')
  if (status) {
    $('#headerMenu').removeClass('open-menu')
  } else {
    $('#headerMenu').addClass('open-menu')
  }
  $('#prdList').removeClass('open-prd')
})
$('.wap-prd').click(function (e) {
  e.stopPropagation()
  let status = $('#prdList').hasClass('open-prd')
  if (status) {
    $('#prdList').removeClass('open-prd')
  } else {
    $('#prdList').addClass('open-prd')
  }
  setTimeout(function () {
    $('#headerMenu').removeClass('open-menu')
  }, 200)
})

$('.pc-prd').hover(function () {
  $(this).addClass('p-active')
  $('#prdList').addClass('pc-open-prd')
}, function (e) {
  if ($(e.relatedTarget).closest('.prd-list')[0]) {
    return;
  }
  $('#prdList').removeClass('pc-open-prd')
  $(this).removeClass('p-active')
})

$('#prdList').hover(function () {
  $('#prdList').addClass('pc-open-prd')
}, function (e) {
  if ($(e.relatedTarget).closest('.pc-prd')[0]) {
    return;
  }
  $('#prdList').removeClass('pc-open-prd')
  $('.pc-prd').removeClass('p-active')
})

$(document).click(function() {
  $('#prdList').removeClass('open-prd')
  $('#headerMenu').removeClass('open-menu')
})
