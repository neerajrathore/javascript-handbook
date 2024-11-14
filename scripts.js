let jsTopicsDataListOptions = []

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const jsTopicsDataList = document.getElementById('js-topics')

    const jsBasicsContainer = document.querySelectorAll('body > #intro-topics > #topics > #js-basics-container > .card-container > .card > a');
    const oopJSContainer = document.querySelectorAll('body > #intro-topics > #topics > #oop-js-container > .card-container > .card > a');
    const asyncJsContainer = document.querySelectorAll('body > #intro-topics > #topics > #async-js-container > .card-container > .card > a');
    const advancedJsContainer = document.querySelectorAll('body > #intro-topics > #topics > #advanced-js-container > .card-container > .card > a');
    const browserAPIContainer = document.querySelectorAll('body > #intro-topics > #topics > #browser-api-container > .card-container > .card > a');
    const comparisonEvaluationContainer = document.querySelectorAll('body > #intro-topics > #topics > #comparison-evaluation-container > .card-container > .card > a');
    const eventHandlingContainer = document.querySelectorAll('body > #intro-topics > #topics > #event-handling-container > .card-container > .card > a');
    const interviewPrepContainer = document.querySelectorAll('body > #intro-topics > #topics > #interview-prep-container > .card-container > .card > a');
    const designPatternsContainer = document.querySelectorAll('body > #intro-topics > #topics > #design-patterns-container > .card-container > .card > a');

    jsBasicsContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    oopJSContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    asyncJsContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    advancedJsContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    browserAPIContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    comparisonEvaluationContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    eventHandlingContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    interviewPrepContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);
    })

    designPatternsContainer.forEach((item) => {
        let obj = {
            goto: item.href,
            text: item.innerText
        }
        jsTopicsDataListOptions.push(obj);
        let newOption = document.createElement("option");
        newOption.value = item.text;
        jsTopicsDataList.appendChild(newOption);

    })
    console.log(jsTopicsDataListOptions);

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                const id = section.getAttribute('id');
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                document.querySelector(`nav a[href="#${id}"]`)?.classList.add('active');
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
    filled.style.width = `${(window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100}%`
    requestAnimationFrame(update);
}
update();

// Back to Top button functionality
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn?.addEventListener("click", function () {
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
        document.querySelector('#themeBtn').innerHTML = "Dark-mode";
        localStorage.setItem('theme', 'light');  // Save light mode in localStorage
    } else {
        theme.add('dark-mode');
        document.querySelector('#themeBtn').innerHTML = "Light-mode";
        localStorage.setItem('theme', 'dark');  // Save dark mode in localStorage
    }
}

// Function to load the theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    // Apply the saved theme (if exists) on page load
    if (savedTheme === 'dark') {
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('#themeBtn').innerHTML = "Light-mode";
    }
    else {
        document.querySelector('#themeBtn').innerHTML = "Dark-mode"; // Show option to switch to Dark Mode
    }
}

// Add event listener for theme button
document.getElementById('themeBtn')?.addEventListener('click', toggleDarkMode);

// Load the theme from localStorage when the page loads
loadTheme();

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
    star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        rating.innerText = value;


        stars.forEach((s) => s.classList.remove("one", "two", "three", "four", "five"));


        stars.forEach((s, index) => {
            if (index < value) {
                s.classList.add(getStarColorClass(value));
            }
        });


        stars.forEach((s) => s.classList.remove("selected"));

        star.classList.add("selected");
    });
});

submitBtn.addEventListener("click", () => {
    const review = reviewText.value;
    const userRating = parseInt(rating.innerText);

    if (!userRating || !review) {
        alert("Please select a rating and provide a review before submitting.");
        return;
    }

    if (userRating > 0) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
        reviewsContainer.appendChild(reviewElement);

        reviewText.value = "";
        rating.innerText = "0";
        stars.forEach((s) => s.classList.remove("one", "two", "three", "four", "five", "selected"));
    }
});

function getStarColorClass(value) {
    switch (value) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        default:
            return "";
    }
}

function dataListItemClick() {
    const input = document.getElementById("search-topics-input").value;
    const data = jsTopicsDataListOptions.find((item) => item.text === input)
    data !== undefined ? window.location.href = data.goto : null
}