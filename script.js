function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// check state
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// toggle on click
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
