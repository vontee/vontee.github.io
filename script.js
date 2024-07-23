document.addEventListener('DOMContentLoaded', function() {
   // LaTeX with mathjax
   if (window.MathJax && MathJax.typesetPromise) {
       MathJax.typesetPromise()
           .then(() => {
               console.log('MathJax typeset complete');
           })
           .catch(err => console.error('Error typesetting MathJax:', err));
   }

   // fetch header
   fetch('header.html')
       .then(response => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.text();
       })
       .then(data => {
           document.getElementById('header_js').innerHTML = data;

           document.getElementById('dark-mode-toggle').addEventListener('click', function() {
               if (document.body.classList.contains('dark-mode')) {
                   disableDarkMode();
               } else {
                   enableDarkMode();
               }
           });
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

   // side menu
   const hamburgerMenu = document.getElementById('hamburger-menu');
   const sidebar = document.querySelector('.sidebar');
   const content = document.querySelector('.content');

   hamburgerMenu.addEventListener('click', function() {
       sidebar.classList.toggle('active');
       content.classList.toggle('active');
   });
});
