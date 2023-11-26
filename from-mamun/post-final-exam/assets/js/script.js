///////////////////// Get POST Tag Data ///////////////////////
async function getPostTagData () {
      const responsePostTag = await fetch('http://172.16.20.112:3000/tags/', {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json',
            },
      });

      const data = await responsePostTag.json();
      const postTagList = document.getElementById("post-tag-item");

      let postTagListHtml = '';
      data.forEach((tag) => {
            postTagListHtml += `<button type="button" class="btn btn-primary">${tag.title}</button>`;
      });
      postTagList.innerHTML = postTagListHtml;

}
getPostTagData();


///////////////////// Get Single Item POST Data ///////////////////////
async function getPostItemData(){
      const postItemResponse = await fetch('http://172.16.20.112:3000/mamun/', {
        method: 'GET',
        headers: {
            authorization: 'mamun-znskmm',
        }
      });

      const postData = await postItemResponse.json();
      const postListItem = document.getElementById("postList");

      //console.log(postData);

      let postItemHtml = '';
      postData.forEach((postItem) => {
            postItemHtml += `<div class="col-lg-6 col-md-6"><div class="blog-item">
                  <div class="blog-item-info">
                        <div class="blog-item-meta">
                              <ul class="blog-tags-list">
                                    <li>Tags:</li>
                                    <li><a href="#">${postItem.tags}</a></li>
                              </ul>
                              <span>By: HasTech</span>
                        </div>
                        <h2><a href="details.html?id=1">${postItem.author}</a></h2>
                  </div>
                  <div class="blog-item-image">
                        <a href="details.html?id=1"><img src="${postItem.thumbnail}" alt="Sample Title" /></a>
                  </div>
                  <div class="blog-item-description">
                        <div class="description">${postItem.description}</div>
                        <a class="readmore_btn" href="details.html?id=1">Read more</a>
                  </div>
          </div></div>`;
      });
      postListItem.innerHTML = postItemHtml;

      //console.log(postData);

}
getPostItemData();


/////////////////////// Get the search /////////////////////
async function searchData() {
      const searchValue = document.querySelector('.form-control').value;
    
      try {
        const response = await fetch(`http://172.16.20.112:3000/mamun/?title_like=${searchValue}`);
        
        if (response.ok) {
          const data = await response.json();
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
}
document.querySelector('.btn').addEventListener('click', searchData);

    

// async function getSearchData(event) {
//       const responseSearch = await fetch(`http://172.16.20.112:3000/mamun/?title_like=${event.target.value}`, {
//             method: 'GET',
//             headers: {
//                   authorization: 'mamun-znskmm',
//             }
//       });

//        const searchData = await responseSearch.json();

//        console.log(searchData);

// }

// // const searchField = document.getElementById("find-search-value");
// // searchField.addEventListener('keyup', getSearchData);
// document.getElementById('find-search-value').addEventListener('submit', handleFormSubmission);


///////////////////// Add Post Added Handle ///////////////////////
async function handleFormSubmission(event) {
      event.preventDefault();
  
      const form = document.getElementById('add-new-post-form');
      
      const formData = new FormData(form);
      const postData = {};
      
      formData.forEach((value, key) => {
          postData[key] = value;
      });
  
      try {
            const response = await fetch('http://172.16.20.112:3000/mamun/', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(postData),
            });

          if (response.ok) {
              console.log('Post added successfully!');
  
              setTimeout(async () => {
                  await showAllJobsSection();
              }, 1000);
          } else {
              console.error('Error adding post:', response.statusText);
          }
      } catch (error) {
          console.error('Error:', error.message);
      }

      
  }
  
  document.getElementById('add-new-post-form').addEventListener('submit', handleFormSubmission);
