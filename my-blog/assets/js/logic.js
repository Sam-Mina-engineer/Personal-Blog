// Add event listner and wait for DOM content and make sure that HTML loads. 

// Make const variable for positive dark mode and make Boolean statement for true. If it is true add dark mode class to body element. 

// That way if dark mode is already on, it loads it with the page. 

// Select element id toggle-mode and add an event listener for a click. That way we can switch back and forth on the dark mode.

// Save the Boolean value of darkmode to localStorage.

document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('toggle-mode').addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
});
