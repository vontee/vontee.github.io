document.addEventListener('DOMContentLoaded', function() {
    // fetch head
    fetch('head.html')
       .then(response => {
          if (!response.ok) {
             throw new Error('Failed to load HTML Head');
          }
          return response.text();
       })
       .then(data => {
          const headerJs = document.getElementById('head_js');
          if (headerJs) {  // head.html -> 'data' -> innerHTML @ head_js
             headerJs.innerHTML = data;
          } else {
             console.error('Header element not found');
          }
       })
       .catch(error => console.error('Error loading header:', error));
 
    // fetch header
    fetch('header.html')
       .then(response => {
          if (!response.ok) {
             throw new Error('Could not fetch header.');
          }
          return response.text();
       })
       .then(data => {
          const headerJs = document.getElementById('header_js');
          if (headerJs) {
             headerJs.innerHTML = data;
 
             const pageTitle = document.title;
             const pageTitleElement = document.getElementById('page-title');
             if (pageTitleElement) {
                pageTitleElement.innerText = pageTitle;
             }
 
             const darkModeToggle = document.getElementById('dark-mode-toggle');
             if (darkModeToggle) {
                darkModeToggle.addEventListener('click', function() {
                   if (document.body.classList.contains('dark-mode')) {
                      disableDarkMode();
                   } else {
                      enableDarkMode();
                   }
                });
             }
          } else {
             console.error('Header element not found');
          }
       })
       .catch(error => console.error('Error loading header:', error));
 
    // dark mode
    function enableDarkMode() {
       document.body.classList.add('dark-mode');
       localStorage.setItem('darkMode', 'enabled');
    }
 
    function disableDarkMode() {
       document.body.classList.remove('dark-mode');
       localStorage.setItem('darkMode', 'disabled');
    }
 
    // dm check
    if (localStorage.getItem('darkMode') === 'enabled') {
       enableDarkMode();
    }
 
    //sidebar
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (hamburgerMenu) {
       const sidebar = document.querySelector('.sidebar');
       const content = document.querySelector('.content');
 
       hamburgerMenu.addEventListener('click', function() {
          if (sidebar) {
             sidebar.classList.toggle('active');
          }
          if (content) {
             content.classList.toggle('active');
          }
       });
    }
 
    //dismiss with close-button
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
       button.addEventListener('click', function() {
          const targetId = button.getAttribute('data-target');
          dismiss(targetId);
       });
    });
 
    function dismiss(targetId) {
       const element = document.getElementById(targetId);
       if (element) {
          element.style.display = 'none';
       }
    }
 });
 