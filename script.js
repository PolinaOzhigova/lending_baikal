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

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu > ul > li > a');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const sectionId = item.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const h2List = section.querySelectorAll('h2');
        const submenu = document.createElement('ul');

        h2List.forEach(h2 => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.textContent = h2.textContent;
          link.setAttribute('href', `#${h2.id}`);
          listItem.appendChild(link);
          submenu.appendChild(listItem);
        });

        // Удаление предыдущего подменю, если есть
        const existingSubmenu = item.parentNode.querySelector('.submenu');
        if (existingSubmenu) {
          existingSubmenu.parentNode.removeChild(existingSubmenu);
        }

        // Показать подменю
        submenu.classList.add('submenu');
        item.parentNode.appendChild(submenu);

        // Добавление класса для tableauPlaceholder
        const tableauPlaceholders = document.querySelectorAll('.tableauPlaceholder');
        tableauPlaceholders.forEach(placeholder => {
          placeholder.style.pointerEvents = 'none';
        });

        // Добавление события для подменю
        submenu.addEventListener('mouseleave', function() {
          submenu.parentNode.removeChild(submenu);
          tableauPlaceholders.forEach(placeholder => {
            placeholder.style.pointerEvents = 'auto';
          });
        });
      }
    });

    item.addEventListener('mouseleave', function() {
      const submenu = item.parentNode.querySelector('.submenu');
      if (submenu) {
        submenu.addEventListener('mouseenter', function() {
          submenu.style.display = 'block';
        });
        submenu.addEventListener('mouseleave', function() {
          submenu.parentNode.removeChild(submenu);
          const tableauPlaceholders = document.querySelectorAll('.tableauPlaceholder');
          tableauPlaceholders.forEach(placeholder => {
            placeholder.style.pointerEvents = 'auto';
          });
        });
      }
    });
  });
});
