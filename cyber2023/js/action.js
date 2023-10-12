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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

        // JavaScript code
        const feedbackButton = document.getElementById('feedback-button');
        const feedbackForm = document.getElementById('feedback-form');
        const feedbackFormSubmit = document.getElementById('user-feedback');

        let clickCount = 0;

feedbackButton.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      feedbackForm.style.display = "block";
    } else if (clickCount === 2) {
      feedbackForm.style.display = "none";
        clickCount = 0; // Reset the click count
    }
});

feedbackFormSubmit.addEventListener('submit', function(e) {
    const feedbackText = document.getElementById('feedback-text').value;
    alert(`Thank you for your feedback:\n${feedbackText}`);

        });