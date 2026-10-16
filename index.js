// Function to Display Posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    // Loop through the posts list
    posts.forEach((post) => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.textContent = post.title;
        const p = document.createElement("p");
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);

        postList.appendChild(li);
    });
}

// Refactor with Async/Await
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        displayPosts(posts);
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
    }
}

// Function on script load
getPosts();
