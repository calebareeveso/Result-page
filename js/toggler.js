$(function () {
  // Mobile Toggler
  const mobileNav = $('.mobile-nav')

  $('.toggler').click(function (e) {
    e.preventDefault()
    if ($('.toggle').hasClass('active')) {
      $('.toggle').removeClass('active')
      mobileNav.removeClass('active')
    } else {
      $('.toggle').addClass('active')
      mobileNav.addClass('active')
    }
  })
})
