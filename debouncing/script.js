// Debounce function to limit the rate of execution
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Function to display search input in the result area
function displaySearchResult(event) {
  const searchText = event.target.value;
  const resultElement = document.getElementById('result');
  resultElement.textContent = `You are searching for: ${searchText}`;
}

// Attach a debounced event listener to the input field
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', debounce(displaySearchResult, 300));
