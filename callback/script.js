async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    document.getElementById('result').innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
    `;
  } catch (error) {
    document.getElementById('result').innerHTML = 'Error fetching data';
  }
}

document.getElementById('fetchButton').addEventListener('click', fetchData);
