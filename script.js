
// script.js
btn.addEventListener('click', () => {
  msgDiv.textContent = 'Thanks for visiting!';
  msgDiv.style.color = 'pink';
  msgDiv.style.fontWeight = 'bold';
});
myBtn.addEventListener('click', function(event) {
  event.preventDefault();  
  messageDiv.textContent = 'Thanks for visiting! 💖';
  messageDiv.style.color = 'pink';
});
function visitGoogle() {
    alert("Thanks for visiting! 💖");
}
// Button click alert
document.getElementById('aboutBtn').addEventListener('click', function() {
  alert('Hello from Hadia!');
});

// Fade-in animation on scroll
function checkVisibility() {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.9;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
