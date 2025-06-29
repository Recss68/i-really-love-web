document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector("ul.menufb");
    if (ul) {
      ul.classList.remove("menufb");
      ul.classList.add("menu-items");
    }
  
    const listItems = document.querySelectorAll("li.itemfb");
    listItems.forEach(function(li) {
      li.classList.remove("itemfb");
      li.classList.add("nav-item");
    });

    const hamMenu = document.querySelector(".hamburger-menu.inactive");
    if (hamMenu) {
      hamMenu.classList.remove("inactive");
    }
  
    // Hamburger menu
    const menu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
    const bars = document.querySelectorAll('.bar');
  
    if (menu && menuItems) {
      menu.addEventListener('click', function () {
        menuItems.classList.toggle('active');
        bars.forEach(function(bar) {
            bar.classList.toggle('active');
          });
        });
      }
  });