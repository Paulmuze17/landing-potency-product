$(document).ready(function() {
  // Установите начальное время таймера (в секундах)
  var totalSeconds = 1800; // 30м

  // Функция для обновления таймера
  function updateTimer() {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    $("#timerHours").text(pad(hours, 2));
    $("#timerMinutes").text(pad(minutes, 2));
    $("#timerSeconds").text(pad(seconds, 2));
  }

  // Функция для добавления ведущих нулей
  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  // Функция для уменьшения времени на 1 секунду
  function decrementTimer() {
    totalSeconds--;
    updateTimer();

    if (totalSeconds === 0) {
      clearInterval(timerInterval);
      alert("Время вышло!");
    }
  }

  // Запуск таймера
  var timerInterval = setInterval(decrementTimer, 1000);




  $('input').on('focus', function() {
    var tooltip = $(this).data('tooltip');
    var $tooltip = $('.tooltip');

    $tooltip.text(tooltip);
    $tooltip.css({
      top: $(this).offset().top - 30,
      left: $(this).offset().left + $(this).outerWidth() + 10
    });
    $tooltip.show();
  });

  $('input').on('blur', function() {
    $('.tooltip').hide();
  });




  $('.section-order__input-number').on('input', function() {
    var value = $(this).val().replace(/\D/g, '');
    $(this).val(value);
  });


  var carouselWrapper = $('.carousel-wrapper');
  var carouselItems = $('.carousel-items');
  var prevBtn = $('.prev-btn');
  var nextBtn = $('.next-btn');

  var currentIndex = 0;
  var itemWidth = $('.carousel-card').outerWidth(true);
  var itemsPerSlide = 3;

  function updateCarousel() {
    var translateX = -currentIndex * itemWidth * itemsPerSlide;
    carouselWrapper.css('transform', 'translateX(' + translateX + 'px)');
  }

  prevBtn.click(function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.click(function() {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  AOS.init({disable: 'mobile'});

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  });
});
