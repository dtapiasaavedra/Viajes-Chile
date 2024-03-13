

// Agregar clase a nav al hacer scroll 👍
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('bg-opacity');
    } else {
      $('.navbar').removeClass('bg-opacity');
    }
  });