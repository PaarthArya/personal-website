document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#navbar');
  let navTop = nav.offsetTop;

  function stickyNavigation() {
    if (window.scrollY >= navTop) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', stickyNavigation);

  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
