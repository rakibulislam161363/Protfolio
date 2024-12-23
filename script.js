const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector("header nav");


menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("bars")
});

const activePage = () => {

  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');


  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('activate');
  setTimeout(() => {
    barsBox.classList.add('activate');
  }, 1100);


  sections.forEach(section => {
    section.classList.remove('activate');
  });
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('bars');
}

navLinks.forEach((link, inx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {

      activePage();

      link.classList.add("active");


      setTimeout(() => {
        sections[inx].classList.add('activate');
      }, 1100);
    };
  })
});

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

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add('activate');
    }, 1100);
  };
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
  // project barali akhana 3 ar bodla ja koita project barba sai koi ta hoba
  if (index < 3) {
    index++;
    arrowLeft.classList.remove("disabled");
  }
  else {
    // akhanaw o barba ak kora
    index = 4;
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
