   //fetch head
   fetch('head.html')
   .then(response => {
       if (!response.ok) {
           throw new Error('Failed to load HTML Head');
       } return response.text(); // error handling
   }) 
   .then(data => { // head.html -> 'data' -> innerHTML @ head_js
       document.getElementById('head_js').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

   // fetch header
   fetch('header.html')
       .then(response => {
           if (!response.ok) {
               throw new Error('Could not fetch header.');
           } return response.text(); // error handling
       }) 
       .then(data => { // header.html -> 'data' -> innerHTML @ header_js
           document.getElementById('header_js').innerHTML = data;
        //set page title
        const pageTitle = document.title;
        document.getElementById('page-title').innerText = pageTitle;

        // header must load for dm toggle anyway
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

   // dismiss with close-button
   const closeButtons = document.querySelectorAll('.close-button');
   closeButtons.forEach(button => {
       button.addEventListener('click', function() {
           const targetId = button.getAttribute('data-target');
           dismissElementById(targetId);
       });
    });