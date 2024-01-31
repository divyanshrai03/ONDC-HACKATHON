document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            this.querySelector('.dropdown-menu').classList.toggle('show');
        });
    });
});


document.querySelector('.user-logo').addEventListener('click', function () {
  document.querySelector('.menu-content').style.display = 'block';
});

// If you want to handle the outside click to close the menu
document.addEventListener('click', function (event) {
  if (!event.target.closest('.user-logo')) {
    document.querySelector('.menu-content').style.display = 'none';
  }
});


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 1400, 
    disableOnInteraction: false,
  },
});

const searchPlaceholder = document.getElementById('searchBar');
    const placeholderTexts = ['Electronics...', 'Fashion...', 'Home Decor...', 'Kitchen...', 'Accessories...'];
    let textIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100; 

    function typeText() {
      if (charIndex < placeholderTexts[textIndex].length) {
        searchPlaceholder.setAttribute('placeholder', placeholderTexts[textIndex].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % placeholderTexts.length;
        setTimeout(typeText, typingSpeed * 15);
      }
    }
    typeText();



  