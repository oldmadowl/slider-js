const prev = document.querySelector('.btn-prev'),
      next = document.querySelector('.btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const changeSlide = current => {
  for(let slide of slides) {
    slide.classList.remove('active');
  };
  slides[current].classList.add('active');
};

const changeDot = current => {
  for(let dot of dots) {
    dot.classList.remove('active');
  };
  dots[current].classList.add('active');
};

const prepareNewSlide = current => {
  changeSlide(current);
  changeDot(current);
};

const nextSlide = () => {
  if(index === slides.length -1) {
    index = 0;
    prepareNewSlide(index);
  } else {
    index++;
    prepareNewSlide(index);
  }
};

const prevSlide = () => {
  if(index === 0) {
    index = slides.length -1;
    prepareNewSlide(index);
  } else {
    index--;
    prepareNewSlide(index);
  };
};

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    index = dotIndex;
    prepareNewSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);