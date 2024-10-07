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


function copyURL() {
    const copyText = document.getElementById('url-input');
    copyText.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}
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
