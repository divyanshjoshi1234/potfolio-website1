document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (name === '' || email === '' || subject === '' || message === '') {
          alert('Please fill in all fields');
      } else if (!validateEmail(email)) {
          alert('Please enter a valid email address');
      } else {
          alert('Message sent successfully');
          form.reset();
      }
  });

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
  }
});
