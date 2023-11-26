// const blogDetailsArea = document.querySelector('.blog-detail-area');
// const url = 'http://172.16.20.112:3000/ashim/';
// const key = 'ashim-exsk123';
// // Selectors for elements on the single job page
// const singlePostThumb = document.getElementById('single-thumbnail');
// const singlePostTitle = document.getElementById('single-post-title');
// const singlePostDescription = document.getElementById('single-description');
// const commentCount = document.getElementById('comment-count');

// // Function to fetch and display the details of a single job
// function singlePostPage(jobId) {
//     // const singleJobUrl = `http://127.0.0.1:5500/details.html?id=${jobId}`;
//     fetch(`${url}/${jobId}`,{
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'authorization': key
//         }
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         let commentsList = data.comments;
//         let commentOutput = '';
//         console.log(data.comments);
//         blogDetailsArea.innerHTML = `<div class="blog-item-image">
//                 <img id="single-thumbnail" src="${data.thumbnail}" alt="${data.title}" />
//               </div>
//               <div class="blog-description">
//                 <h2 id="single-post-title">
//                   ${data.title}
//                   <span
//                     class="edit-post"
//                     data-toggle="modal"
//                     data-target="#postEditModal"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       class="bi bi-pencil-square"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
//                       />
//                       <path
//                         fill-rule="evenodd"
//                         d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
//                       />
//                     </svg>
//                   </span>
//                 </h2>
//                 <div class="description" id="single-description">
//                 ${data.description}
//                 </div>
//               </div>
//               <div class="blog-comment-area">
//                 <h2 id="comment-count">${data.comments.length} COMMENTS</h2>
//                 <ul class="comment-list">
                
//                     ${
//                         commentsList.map((value)=>{
//                             return `<li>
//                             <div class="author-image">
//                               <img src="./assets/user-avater.avif" alt="Comment user" />
//                             </div>
//                             <div class="comment-area">
//                               <h4>HasTech</h4>
//                               <p>
//                                 ${value.commenttext                        }
//                               </p>
//                             </div>
//                             <div class="delete-comment">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="currentColor"
//                                 class="bi bi-trash3"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path
//                                   d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
//                                 />
//                               </svg>
//                             </div>
//                           </li>`
//                         }).join('')
//                     }
//                 </ul>
//               </div>

//               <div class="blog-comment-form">
//                 <h2>TYPE YOUR COMMENT</h2>
//                 <form>
//                   <div class="form-group">
//                     <label for="comment-text" class="col-form-label"
//                       >Comment:</label
//                     >
//                     <textarea class="form-control" id="comment-text"></textarea>
//                   </div>
//                   <div class="form-group">
//                     <label for="comment-author" class="col-form-label"
//                       >Name:</label
//                     >
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="comment-author"
//                     />
//                   </div>
//                   <button type="submit" class="btn btn-primary">Comment</button>
//                 </form>
//               </div>`;

//       });
//   }

// // Extract job ID from the URL query parameters
// const urlParams = new URLSearchParams(window.location.search);
// const postIdFromUrl = urlParams.get('id');
// // console.log(postIdFromUrl);

// // Check if there is a job ID in the URL and display its details
// if (postIdFromUrl) {
//     singlePostPage(postIdFromUrl);
// }