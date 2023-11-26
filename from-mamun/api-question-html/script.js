// Get the API Tag
async function getTagData(){

  const response = await fetch('http://172.16.20.112:3000/tags/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  const tagList = document.getElementById("taglist");

  let tagListHtml = '';
  data.forEach((tag) => {
      tagListHtml += `<div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">${tag.title}</div>`;
  });
  tagList.innerHTML = tagListHtml;

  // Add an event listener to the search input
  const searchInput = document.querySelector('input[name="search"]');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTags = data.filter(tag => tag.title.toLowerCase().includes(searchTerm));

    let filteredTagListHtml = '';
    filteredTags.forEach((tag) => {
      filteredTagListHtml += `<div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">${tag.title}</div>`;
    });
    tagList.innerHTML = filteredTagListHtml;
  });

 // console.log(tagList);
  
}
getTagData();


// Get the API Video
async function getVideoData(){
      const videoResponse = await fetch('http://172.16.20.112:3000/mamun/', {
        method: 'GET',
        headers: {
            authorization: 'mamun-znskmm',
        }
      });

      const videoData = await videoResponse.json();
      const videoList = document.getElementById("videolist");

      let videoListHtml = '';
      videoData.forEach((video) => {
            videoListHtml += `<div class="col-span-12 sm:col-span-6 md:col-span-4 duration-300 hover:scale-[1.03]">
            <div class="w-full flex flex-col">
              <div class="relative">
                <a href="${video.link}">
                  <img src="${video.thumbnail}" class="w-full h-auto" alt="Some video title"/>
                </a>
                <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">${video.duration}</p>
              </div>

              <div class="flex flex-row mt-2 gap-2">
                <a href="${video.link}" class="shrink-0">
                  <img src="${video.avatar}" class="rounded-full h-6 w-6" alt="HasThemes"/>
                </a>

                <div class="flex flex-col">
                  <a href="${video.link}">
                    <p class="text-slate-900 text-sm font-semibold">${video.title}</p>
                  </a>

                  <a class="text-gray-400 text-xs mt-2 hover:text-gray-600" href="${video.link}">${video.author}</a>

                  <div class="pb-4 flex items-center space-between">
                    <p class="text-gray-400 text-xs mt-1 w-full">${video.date}</p>

                    <!-- like/unlike -->
                    <div class="flex gap-10 w-40">

                      <div class="flex gap-1 cursor-pointer">
                        <div class="shrink-0">
                          <img class="w-5 block" src="./assets/like.svg" alt="Like" onclick="incrementLikes(event, ${video.id})"/>
                        </div>
                        <div class="text-sm leading-[1.7142857] text-slate-600" id="likeCount_${video.id}">${video.likes}</div>
                      </div>

                      <div class="flex gap-1 cursor-pointer">
                        <div class="shrink-0">
                          <img class="w-5 block" src="./assets/unlike.svg" alt="Unlike" onclick="decrementLikes(event, ${video.id})"/>
                        </div>
                        <div class="text-sm leading-[1.7142857] text-slate-600" id="dislikeCount_${video.id}">${video.unlikes}</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      });
      videoList.innerHTML = videoListHtml;

      //console.log(videoData);

}
getVideoData();

// Define the click like unlike event handlers
function incrementLikes(likeElement, videoId) {
      const countElement = document.getElementById(`likeCount_${videoId}`);
      countElement.textContent = parseInt(countElement.textContent) + 1;
}


function decrementLikes(dislikeElement, videoId) {
      const countElement = document.getElementById(`dislikeCount_${videoId}`);
      countElement.textContent = parseInt(countElement.textContent) - 1;
}