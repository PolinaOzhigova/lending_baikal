function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('expanded');
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('expanded');
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
  }
  
  window.addEventListener('scroll', () => {
    const indicators = document.querySelectorAll('.indicator');
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
      }
    });
  });
  