const mode = localStorage.getItem("mode") || ""
const toggle  = document.querySelector(".toggle");
const body   = document.querySelector("body");

document.body.className = mode;


toggle.addEventListener("click", ()=>{
  localStorage.setItem("mode", mode === "light" ? "" : "light")
  body.classList.toggle("light")
})

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            searchResults.innerHTML = ''; // Clear previous results

            if (query) {
                const posts = JSON.parse(document.getElementById('post-data').textContent);
                const filteredPosts = posts.filter(post => 
                    post.title.toLowerCase().includes(query) || 
                    (post.description && post.description.toLowerCase().includes(query))
                );

                filteredPosts.forEach(post => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<a href="${post.url}">${post.title}</a>`;
                    searchResults.appendChild(listItem);
                });
            }
        });
    }
});

