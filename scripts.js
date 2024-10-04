document.addEventListener('DOMContentLoaded', function () {
  // Scroll Animation for features and sections
  const scrollElements = document.querySelectorAll('.features-grid, .mission-section, .vision-section');
  
  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('scroll-reveal');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
});
