document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                const id = section.getAttribute('id');
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            }
        });
    });
});

const createToastContainer = () => {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    return toastContainer;
}

const showToast = (message, duration = 2000) => {
    const toastContainer = createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}

function copyURL() {
    const copyText = document.getElementById('url-input');
    copyText.select();
    document.execCommand("copy");

    showToast("Link copied to clipboard!", 2000); 
}
 
// scroll progress bar functionality
const filled = document.querySelector(".filled")
function update() {
    filled.style.width = `${(window.scrollY)/ (document.body.scrollHeight - window.innerHeight)*100}%`
    requestAnimationFrame(update);
}
update();

// Back to Top button functionality
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle Dark Mode

function toggleDarkMode() {
    const theme = document.querySelector('body').classList;

    // Check if 'dark-mode' is active
    if (theme.contains('dark-mode')) {
      theme.remove('dark-mode');
      document.querySelector('#themeBtn').innerHTML ="Dark-mode" ;
      localStorage.setItem('theme', 'light');  // Save light mode in localStorage
    } else {
      theme.add('dark-mode');
      document.querySelector('#themeBtn').innerHTML ="Light-mode" ;
      localStorage.setItem('theme', 'dark');  // Save dark mode in localStorage
    }
  }

  // Function to load the theme from localStorage
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the saved theme (if exists) on page load
    if (savedTheme === 'dark') {
      document.querySelector('body').classList.add('dark-mode');
      document.querySelector('#themeBtn').innerHTML ="Light-mode" ;
    }
    else {
        document.querySelector('#themeBtn').innerHTML = "Dark-mode"; // Show option to switch to Dark Mode
      }
  }

  // Add event listener for theme button
  document.getElementById('themeBtn').addEventListener('click', toggleDarkMode);

  // Load the theme from localStorage when the page loads
  loadTheme();

 function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
  }
