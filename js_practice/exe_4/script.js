const images = [
  './images/avocado.jpeg',
  './images/pancake.jpeg',
  './images/sandwich.jpeg',
  './images/spaghetti.jpeg',
];

const img = document.querySelector('img');
const carousel = document.querySelector('.imageCarousel');

window.addEventListener('DOMContentLoaded', () => {
  let imgNum = 0;
  img.src = images[0];
  carousel.addEventListener('click', (e) => {
    if (e.target.id === 'next-button') {
      imgNum = moveNext(imgNum);
    } else if (e.target.id === 'prev-button') {
      imgNum = movePrev(imgNum);
    }
    img.src = images[imgNum];
  });
});

const moveNext = (num) => {
  if (num < 3) {
    return (num += 1);
  } else if (num >= 3) {
    return (num = 0);
  }
};

const movePrev = (num) => {
  if (num > 0) {
    return (num -= 1);
  } else if (num <= 0) {
    return (num = 3);
  }
};
