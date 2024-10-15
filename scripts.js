document.addEventListener('DOMContentLoaded', () => {
    // Select all sections in the document
    const sections = document.querySelectorAll('section');
     // Add an event listener for the scroll event
    window.addEventListener('scroll', () => {
         // Calculate the position in the viewport (middle of the screen)
        const scrollPos = window.scrollY + window.innerHeight / 2;
        // Loop through each section to check its position
        sections.forEach(section => {
            // Check if the current section is in view
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                // Get the ID of the section
                const id = section.getAttribute('id');
                // Remove the 'active' class from all navigation links
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                // Add the 'active' class to the corresponding navigation link
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            }
        });
    });
});

// Function to copy the URL from an input field
function copyURL() {
    const copyText = document.getElementById('url-input');
    copyText.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}

// Back to Top button functionality
let backToTopBtn = document.getElementById("backToTopBtn");
// Add an event listener for scrolling
window.onscroll = function() {
    // Show the button if scrolled down more than 200 pixels
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
// Add click event to the Back to Top button
backToTopBtn.addEventListener("click", function() {
     // Smoothly scroll back to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
