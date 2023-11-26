const blogArea = document.getElementById('post-lists');
const tagFilterButton = document.querySelector('.tag-filter-button');
const searchValue = document.getElementById('post-search');
const tagSelector = document.querySelector('.tag-selector');

// for single post page 
const blogDetailsArea = document.querySelector('.blog-detail-area');
const relatedPost = document.querySelector('.related-blog-area');

//comments
const commentText = document.getElementById('comment-text');
const commentName = document.getElementById('comment-author');

const apiUrl = 'http://172.16.20.112:3000/ashim/';
const tagsUrl = 'http://172.16.20.112:3000/tags/';
const key = 'ashim-exsk123';

// Render the posts function
function renderPosts(items) {
    let output = '';
    items.forEach(item => {
        output += `<div class="col-lg-6 col-md-6">
            <div class="blog-item">
                <div class="blog-item-info">
                    <div class="blog-item-meta">
                        <ul class="blog-tags-list">
                            <li>Tags:</li>
                            <li><a href="#">${item.tags}</a></li>
                        </ul>
                        <span>By: ${item.author}</span>
                    </div>
                    <h2><a href="details.html?id=${item.id}">${item.title}</a></h2>
                </div>
                <div class="blog-item-image">
                    <a href="details.html?id=${item.id}">
                        <img src="${item.thumbnail}" alt="${item.title}" />
                    </a>
                </div>
                <div class="blog-item-description">
                    <div class="description">
                        ${item.description}a
                    </div>
                    <a class="readmore_btn" href="details.html?id=${item.id}">Read more</a>
                </div>
            </div>
        </div>`;
    });

    // Move this line outside the loop
    if(blogArea){
        blogArea.innerHTML = output;
    }
}

// Rendar the post tags function
function renderTags(items){
    let tagOutput = '';
    items.forEach(item => {
        tagOutput += `<button type="button" class="btn btn-secondary" id="${item.title.toLowerCase()}">${item.title}</button>`;
        if(tagFilterButton){
            tagFilterButton.innerHTML = `<button type="button" class="btn btn-primary" id="all-post-list">All</button>` + tagOutput;
        }
    });
}

// link ?tags_like=html
// filter by tag
if(tagFilterButton){
    tagFilterButton.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e.target.id);
    
        if(e.target.id == 'all-post-list'){
            fetchData(apiUrl)
                .then((data) => renderPosts(data))
                .catch((error) => console.error(error));
        }else{
            fetchData(`${apiUrl}?tags_like=${e.target.id}`)
                .then((data) => renderPosts(data))
                .catch((error) => console.error(error));
        }
    });
}

// Search the post by job title
if(searchValue){
    searchValue.addEventListener('input', function () {
        const inputValue = searchValue.value.toLowerCase();
    
        fetchData(apiUrl)
            .then((data) => {
                const searchedPost = data.filter(item => item.title.toLowerCase().includes(inputValue));
                renderPosts(searchedPost);
            })
    });
}


// tagSelector
// Fetch all tag data on add new post form popup.
fetch('http://172.16.20.112:3000/tags/')
    .then((res) => res.json())
    .then((tags) => {
        let fetchTags = '';
        tags.forEach(tag => {
            fetchTags += `<input type="checkbox" name="tags[]" id="${tag.title.toLowerCase()}" value="${tag.title.toLowerCase()}" />
            <label for="${tag.title.toLowerCase()}"> ${tag.title}</label><br />`;
            tagSelector.innerHTML = fetchTags;
        })
    });

fetchData(tagsUrl)
    .then((items) => {
        let fetchTags = '';
        items.forEach((item) => {
            fetchTags += `<input type="checkbox" name="tags[]" id="${item.title.toLowerCase()}" value="${item.title.toLowerCase()}" />
            <label for="${item.title.toLowerCase()}"> ${item.title}</label><br />`;
            tagSelector.innerHTML = fetchTags;
        })
    })

// fetch the data function
function fetchData(url, method = 'GET') {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'authorization': key
        }
    }).then((res) => res.json());
}

// Fetch or display the post data from api endpoint
fetchData(apiUrl)
    .then((data) => renderPosts(data))
    .catch((error) => console.error(error));

// fetch or display the post tags data from api endpoint
fetchData(tagsUrl)
    .then((data) => renderTags(data))
    .catch((error) => console.error(error));


// Function to fetch and display the details of a single job
// ...

// Function to fetch and display the details of a single job
function singlePostPage(postID) {
    let currentPostId;
    fetchData(`${apiUrl}/${postID}`)
        .then((data) => {
            currentPostId = data.id;
            // let currentPostTag = data.tags;
            let commentsList = data.comments;

            // Display the details of the current post
            blogDetailsArea.innerHTML = `
                <div class="blog-item-image">
                    <img id="single-thumbnail" src="${data.thumbnail}" alt="${data.title}" />
                </div>
                <div class="blog-description">
                    <h2 id="single-post-title">
                        ${data.title}
                        <span class="edit-post" data-toggle="modal" data-target="#postEditModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <!-- ... (your SVG path) -->
                            </svg>
                        </span>
                    </h2>
                    <div class="description" id="single-description">
                        ${data.description}
                    </div>
                </div>
                <div class="blog-comment-area">
                    <h2 id="comment-count">${data.comments.length} COMMENTS</h2>
                    <ul class="comment-list">
                        ${commentsList.map((comment) => {
                            let commentAuthor = '';
                            if(comment.author){commentAuthor = comment.author}else{commentAuthor = 'HasTech'}
                            return `<li>
                            <div class="author-image">
                                <img src="./assets/user-avater.avif" alt="Comment user" />
                            </div>
                            <div class="comment-area">
                                <h4>${commentAuthor}</h4>
                                <p>${comment.commenttext}</p>
                            </div>
                            <div class="delete-comment">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" >
                                    <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                    />
                                </svg>
                            </div>
                        </li>`;
                        })}                        
                    </ul>
                </div>
                <div class="blog-comment-form">
                    <h2>TYPE YOUR COMMENT</h2>
                    <form onsubmit="postComment(event)">
                        <div class="form-group">
                            <label for="comment-text" class="col-form-label">Comment:</label>
                            <textarea class="form-control" id="comment-text"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="comment-author" class="col-form-label">Name:</label>
                            <input type="text" class="form-control" id="comment-author" />
                        </div>
                        <button type="submit" class="btn btn-primary">Comment</button>
                    </form>
                </div>
            `;

            // Fetch related posts based on the current post's tags
            fetchData(apiUrl)
                .then((posts) => {
                    const relatedPosts = getRelatedPosts(data, posts);
                    // Display related posts
                    displayRelatedPosts(relatedPosts);
                })
                .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
}

// relatedPost
// Function to get related posts based on tags
function getRelatedPosts(currentPost, allPosts) {
    const currentPostTags = currentPost.tags;

    // Filter posts to find those with similar tags
    const relatedPosts = allPosts.filter(post => {
        return post.id !== currentPost.id && post.tags.some(tag => currentPostTags.includes(tag));
    });

    return relatedPosts;
}

// Function to display related posts
function displayRelatedPosts(relatedPosts) {
    let relatedPostResult = '';
    relatedPosts.forEach(related => {
        relatedPostResult += `<div class="single-related-blog">
            <div class="related-item-image">
              <a href="details.html?id=${related.id}">
                <img src="${related.thumbnail}" alt="${related.title}" />
              </a>
            </div>
            <div class="related-item-info">
              <h3><a href="details.html?id=${related.id}">${related.title}</a></h3>
              <p>${related.description}</p>
            </div>
          </div>`;
    })
    
    // Display related posts in the relatedBlogArea
    relatedPost.innerHTML = relatedPostResult;
}

// Extract job ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const postIdFromUrl = urlParams.get('id');
// console.log(postIdFromUrl);

// Check if there is a job ID in the URL and display its details
if (postIdFromUrl) {
    singlePostPage(postIdFromUrl);
}