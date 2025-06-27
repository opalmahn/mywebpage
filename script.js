// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const htmlElement = document.documentElement; // This is the <html> tag

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference or system preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
