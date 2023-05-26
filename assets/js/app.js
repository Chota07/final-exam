window.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelector('.headers');
  const headerImg = document.querySelector('.header-main-img');

  function setHeaderImgHeight() {
    const headersHeight = headers.offsetHeight;
    headerImg.style.height = headersHeight + 'px';
  }

  setHeaderImgHeight();

  window.addEventListener('resize', setHeaderImgHeight);
});

const images = document.querySelectorAll('.header-main-img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
      image.classList.remove('hide');
    } else {
      image.classList.remove('active');
      image.classList.add('hide');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
setInterval(nextImage, 5000);
showImage(currentIndex);

function stopAnimations() {
  var progressBarDesign = document.querySelector('.progress-bar-design');
  var progressBarPhotography = document.querySelector('.progress-bar-photography');
  var progressBarMarking = document.querySelector('.progress-bar-marking');
  var progressBarPhotoshop = document.querySelector('.progress-bar-photoshop');

  progressBarDesign.style.animationPlayState = 'paused';
  progressBarPhotography.style.animationPlayState = 'paused';
  progressBarMarking.style.animationPlayState = 'paused';
  progressBarPhotoshop.style.animationPlayState = 'paused';
}
stopAnimations();

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        var progressBarDesign = document.querySelector('.progress-bar-design');
        var progressBarPhotography = document.querySelector('.progress-bar-photography');
        var progressBarMarking = document.querySelector('.progress-bar-marking');
        var progressBarPhotoshop = document.querySelector('.progress-bar-photoshop');
        
        progressBarDesign.style.animationPlayState = 'running';
        progressBarPhotography.style.animationPlayState = 'running';
        progressBarMarking.style.animationPlayState = 'running';
        progressBarPhotoshop.style.animationPlayState = 'running';
        
        observer.unobserve(entry.target);
      }
    });
  }
  var progressBars = document.querySelectorAll('.sec-progress-conteiner');
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  progressBars.forEach(function(progressBar) {
    observer.observe(progressBar);
  });


var cards = document.querySelectorAll('.cards');
cards.forEach(function(card, index) {
  card.addEventListener('click', function() {
    var nextEmptyCard = card.nextElementSibling;
    var emptyCards = document.querySelectorAll('.empty');

    if (nextEmptyCard && nextEmptyCard.classList.contains('empty')) {
      nextEmptyCard.classList.remove('empty-hide');
    }
    emptyCards.forEach(function(emptyCard) {
      if (emptyCard !== nextEmptyCard) {
        emptyCard.classList.add('empty-hide');
      }
    });
  });
});

var keyA = document.querySelector('.key-a');
var keyB = document.querySelector('.key-b');
var keyC = document.querySelector('.key-c');
var gdCardA = document.querySelector('.gd-card-a');
var gdCardB = document.querySelector('.gd-card-b');
var gdCardC = document.querySelector('.gd-card-c');

keyA.addEventListener('click', function() {
  switchCards('a');
});

keyB.addEventListener('click', function() {
  switchCards('b');
});

keyC.addEventListener('click', function() {
  switchCards('c');
});

function switchCards(key) {
  gdCardA.classList.add('gd-hide');
  gdCardB.classList.add('gd-hide');
  gdCardC.classList.add('gd-hide');

  if (key === 'a') {
    gdCardA.classList.remove('gd-hide');
  } else if (key === 'b') {
    gdCardB.classList.remove('gd-hide');
  } else if (key === 'c') {
    gdCardC.classList.remove('gd-hide');
  }
}
