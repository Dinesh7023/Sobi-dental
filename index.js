// carousal

let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide");
let dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(nextSlide, 50000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

// navbar 

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPath = window.location.pathname.split("/").pop();

  // Set active class based on current page only
  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (
      (currentPath === '' || currentPath === 'index.html') && href === 'index.html' ||
      currentPath === 'service.html' && href === 'service.html'
    ) {
      link.classList.add('active');
    }
  });
});


// bento grid

const main = () => {
  const articles = Array.from(document.querySelectorAll("article"));

  articles.forEach((article, index) => {
    setTimeout(() => {
      article.classList.add("reveal");
    }, index * 250);
  });
};
document.addEventListener("DOMContentLoaded", main);


