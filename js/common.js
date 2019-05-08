$('#more').click(function () {
  let status = $('#headerMenu').hasClass('open-menu')
  if (status) {
    $('#headerMenu').removeClass('open-menu')
  } else {
    $('#headerMenu').addClass('open-menu')
  }
})
