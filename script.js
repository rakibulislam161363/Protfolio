const resumsBtns = document.querySelectorAll(".btn");

resumsBtns.forEach((button, idx) => {
  button.addEventListener("click", () => {
    const resumaDetail = document.querySelectorAll('.resuma-detail');

    resumsBtns.forEach(button => {
      button.classList.remove("active");
    });
    button.classList.add("active");

    resumaDetail.forEach(detail => {
      detail.classList.remove("actived")
    });
    resumaDetail[idx].classList.add("actived");
  });
});


const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');


let index = 0;


const activePortfolio = () => {
  const imgSlide = document.querySelector('.img-slide');

  const portfolioDetails = document.querySelectorAll('.portfolio-detail');


  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => {
    detail.classList.remove('portfolio-active');
  });

  portfolioDetails[index].classList.add('portfolio-active');
}
arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  }
  else {
    index = 5;
    arrowRight.classList.add('disabled');
  }
  activePortfolio();
});
arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  } else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activePortfolio();
});
