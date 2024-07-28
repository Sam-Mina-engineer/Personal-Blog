//Load DOM after HTML runs.

//Use JSON.parse to get the blogPosts from localStorage. Use || [] to initialize it as an empty array if there are no posts to retrieve. 

// Create a const variable to be a container for the blog posts. That way there is a reference to the container where the blog posts will show.

// Use a forEach loop to go through each item in array and run the function given for each item. It will allow me
// to go through each blog post and make an HTML element for it.

// Need another create const variable to create a new div element so that there can be a new container for each blog post on the page.

// Make sure to apply the CSS styles to the div element. And then populate the div element with the blog post. 

// Append to container.

// Sleect the element with ID back button and andd event listener for a click. window.location.href it back to index.html.

// Make another one to toggle dark mode. 

document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Posted by: ${post.username}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    //document.getElementById('toggle-mode').addEventListener('click', function() {
       // document.body.classList.toggle('dark-mode');
// I commented out the above two lines because I already wrote this code in the logic.js page and the redudancy was creating the conflict
//that prevented the toggle mode from working on the blog page. 
    });
;
