document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (!username || !title || !content) {
            alert('Please complete all fields');
            return;
        }

        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({ username: username, title: title, content: content });
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        window.location.href = 'blog.html';
    });
});

