let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
}



function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function countUp(element, target, duration) {
  console.log("countUp called for:", element); 
  let start = 0;
  const increment = target / (duration * 100);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      clearInterval(timer);
      element.textContent = target;
    }
  }, 10); 
}

const counters = document.querySelectorAll(".counter");

window.addEventListener("scroll", () => {
  counters.forEach((counter) => {
    if (isInViewport(counter)) {
      console.log("Counter in viewport:", counter); 
      const target = +counter.getAttribute("data-target");
      if (counter.textContent === "0") {
        console.log("Starting countUp for:", counter); 
        countUp(counter, target, 5); 
      }
    }
  });
});





document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.blink');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.5 
  });

  observer.observe(element);
});