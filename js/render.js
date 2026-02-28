const container = document.getElementById("post-list");

posts.forEach(post => {
    container.innerHTML += `
    <section class="post">
        <a href="${post.link}" class="thumbnail-box">
            <img src="${post.img}">
        </a>
        <div class="content">
            <a href="${post.link}">
                <h2>${post.title}</h2>
            </a>
            <p>${post.desc}</p>
        </div>
    </section>
    `;
});