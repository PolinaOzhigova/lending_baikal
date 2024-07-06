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

function showSubMenu(event) {
  const item = event.currentTarget;
  const sectionId = item.getAttribute('href').substring(1);
  const section = document.getElementById(sectionId);

  // Проверяем, если секции 2 или 6, то не добавляем подменю
  if (sectionId === 'section2' || sectionId === 'section6') {
    return;
  }

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
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu > ul > li > a');
  const isMobile = window.innerWidth <= 600;
  // console.log(window.innerWidth)
  
  menuItems.forEach(item => {
    if (isMobile) {
      item.addEventListener('click',function() {
        closeMenu();
      });;
    } else {
      item.addEventListener('click',function() {
        closeMenu();
      });
      item.addEventListener('mouseenter', showSubMenu);
    }
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