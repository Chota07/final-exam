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
  keyA.classList.add('red');
  keyB.classList.remove('red');
  keyC.classList.remove('red');
});
keyB.addEventListener('click', function() {
  switchCards('b');
  keyA.classList.remove('red');
  keyB.classList.add('red');
  keyC.classList.remove('red');
});
keyC.addEventListener('click', function() {
  switchCards('c');
  keyA.classList.remove('red');
  keyB.classList.remove('red');
  keyC.classList.add('red');
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


var rosaImgs = document.querySelectorAll('.rosa-img');
var rosaCards = document.querySelectorAll('.rosa-card');

for (var i = 0; i < rosaImgs.length; i++) {
  rosaImgs[i].addEventListener('click', function(event) {
    event.target.classList.toggle('empty-hide');
    var nextCard = event.target.nextElementSibling;
    if (nextCard && nextCard.classList.contains('rosa-card')) {
      nextCard.classList.remove('empty-hide');
    }
  });
}
for (var i = 0; i < rosaCards.length; i++) {
  rosaCards[i].addEventListener('click', function(event) {
    if (!event.target.matches('h4, span')) {
      event.target.classList.toggle('empty-hide');
      var previousImg = event.target.previousElementSibling;
      if (previousImg && previousImg.classList.contains('rosa-img')) {
        previousImg.classList.remove('empty-hide');
      }
    }
  });
}


const form = document.querySelector('form');
const modal = document.getElementById('modal');
const modalClose = modal.querySelector('.close');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  fetch('https://borjomi.loremipsum.ge/api/send-message', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      modal.classList.add('modal-active');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
modalClose.addEventListener('click', function () {
  modal.classList.remove('modal-active');
});


var listItems = document.querySelectorAll('li');

listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.add('li-red');
    var redLine = item.querySelector('div');
    if (redLine) {
      redLine.classList.add('red-line');
    }
    listItems.forEach(function(li) {
      if (li !== item) {
        li.classList.remove('li-red');
      }
    });
    var redLines = document.querySelectorAll('li div.red-line');
    redLines.forEach(function(line) {
      if (line !== redLine) {
        line.classList.remove('red-line');
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var liElements = document.querySelectorAll(".lp nav ul li");
  var lpActiveElements = document.querySelectorAll(".lp-boxes .lp-active");
  liElements.forEach(function(li, index) {
    li.addEventListener("click", function() {
      if (index === 0) {
        lpActiveElements.forEach(function(lpActive) {
          lpActive.classList.remove("lp-hide");
          lpActive.classList.remove("lp-card");
          lpActive.classList.add("lp-active");
        });
      } else {
        lpActiveElements.forEach(function(lpActive, lpIndex) {
          if (index - 1 === lpIndex) {
            lpActive.classList.remove("lp-hide");
            lpActive.classList.remove("lp-active");
            lpActive.classList.add("lp-card");
          } else {
            lpActive.classList.add("lp-hide");
          }
        });
      }
    });
  });
});
