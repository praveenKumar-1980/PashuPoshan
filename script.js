document.addEventListener('DOMContentLoaded', function() {
    fetch('blog-content.json')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blog-content');
            data.blogs.forEach(blog => {
                const blogHTML = `
                    <div class="blog-post">
                        <h2>${blog.title}</h2>
                        <img src="${blog.image}" width=600, height=500 alt="${blog.title}" class="img-fluid">
                        <p>${blog.content}</p>
                    </div>
                `;
                blogContainer.innerHTML += blogHTML;
            });
        })
        .catch(error => console.error('Error loading the blog content:', error));
});
