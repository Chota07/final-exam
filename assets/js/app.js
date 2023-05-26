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
