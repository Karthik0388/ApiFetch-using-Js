//?By using async and await
let section = document.getElementById("fetch_data");

async function fetchData() {
  let URL = "https://jsonplaceholder.typicode.com/posts";
  let fetchedData = await window.fetch(URL);
  let finalData = await fetchedData.json();
  console.log(finalData);
  section.innerHTML = finalData.slice(0, 10).map(data => {
    return `
        <tr>
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td>${data.body}</td>
        </tr>;
        `;
  });
}
fetchData();
let word = "aabbccddd";

for (let i = 0; i < word.length; i++) {
  let count = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[i] == word[j]) {
      count++;
    }
  }
}
