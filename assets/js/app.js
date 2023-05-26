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
  