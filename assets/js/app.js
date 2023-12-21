
// const counterNum = document.querySelector('.counter-number');

// const speed = 200;

// counterNum.forEach((curr))


 

$(document).ready(function () {
  $('.counter-value').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 9900,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});
