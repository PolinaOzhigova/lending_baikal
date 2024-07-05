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

          // Добавление обработчика для клика по пункту подменю
          link.addEventListener('click', function() {
            submenu.parentNode.removeChild(submenu);
            closeMenu();
            const tableauPlaceholders = document.querySelectorAll('.tableauPlaceholder');
            tableauPlaceholders.forEach(placeholder => {
              placeholder.style.pointerEvents = 'auto';
            });
          });
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

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      closeMenu();
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const description = document.getElementById("description");
  const toggleButton = document.getElementById("toggleDescription");

  toggleButton.addEventListener("click", function(event) {
      event.preventDefault();
      if (description.classList.contains("collapsed")) {
          description.classList.remove("collapsed");
          description.classList.add("expanded");
          toggleButton.textContent = "скрыть";
      } else {
          description.classList.remove("expanded");
          description.classList.add("collapsed");
          toggleButton.textContent = "открыть далее";
          description.scrollIntoView({ behavior: 'smooth' });
      }
  });
});