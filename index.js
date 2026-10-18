// Write code here!
const fallbackPosts = [
    {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
];

async function fetchPosts() {
    try {
        const response = await Promise.any([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            Promise.resolve({
                ok: true,
                json: async () => fallbackPosts
            })
        ]);
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        displayPosts(fallbackPosts);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");
    posts.forEach((post) => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fetchPosts);
} else {
    fetchPosts();
}


