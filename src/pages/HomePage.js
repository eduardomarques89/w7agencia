let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// // Automatically move to the next slide every 3 seconds
// setInterval(nextSlide, 3000);

// var Zaia = {
//   AgentURL: "https://platform.zaia.app/embed/chat/17833"
// };

document.addEventListener('DOMContentLoaded', function () {
  var progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function (bar) {
    var value = bar.getAttribute('data-value');
    bar.style.width = value + '%';
    bar.previousElementSibling.querySelector('.darkcolors .progress-percent').textContent = value + '%';
  });
});