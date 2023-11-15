async function getImage(){
    const response = await fetch('http://172.16.20.112:3000/kamal/',{
        method: "GET",
        headers:{
            Accept: 'application/json',
            authorization: key,
        }
    });
    const data = await response.json();
    //  console.log(data);
    let output ="";
      for( let item of data){
        //console.log(item.author);
        output += `<div
            class="col-span-12 sm:col-span-6 md:col-span-4 duration-300 hover:scale-[1.03]"
          >
            <div class="w-full flex flex-col">
              <div class="relative">
                <a href="${item.link}">
                  <img
                    src="${item.thumbnail}"
                    class="w-full h-auto"
                    alt="Some video title"
                  />
                </a>
                <p
                  class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                  5:10
                </p>
              </div>

              <div class="flex flex-row mt-2 gap-2">
                <a href="#" class="shrink-0">
                  <img
                    src="${item.avatar}"
                    class="rounded-full h-6 w-6"
                    alt="HasThemes"
                  />
                </a>

                <div clas="flex flex-col">
                  <a href="#">
                    <p class="text-slate-900 text-sm font-semibold">
                       ${item.title}
                    </p>
                  </a>
                  <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                  >
                    ${item.author}
                  </a>
                  <div class="pb-4 flex items-center space-between">
                    <p class="text-gray-400 text-xs mt-1 w-full">
                      ${item.views} views .  ${item.data}
                    </p>

                    <!-- like/unlike -->
                    <div class="flex gap-10 w-40">
                      <div class="flex gap-1 cursor-pointer">
                        <div class="shrink-0">
                          <img
                            class="w-5 block"
                            src="./assets/like.svg"
                            alt="Like"
                          />
                        </div>
                        <div class="text-sm leading-[1.7142857] text-slate-600">
                          ${item.likes}
                        </div>
                      </div>
                      <div class="flex gap-1 cursor-pointer">
                        <div class="shrink-0">
                          <img
                            class="w-5 block"
                            src="./assets/unlike.svg"
                            alt="Unlike"
                          />
                        </div>
                        <div class="text-sm leading-[1.7142857] text-slate-600">
                          ${item.unlikes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        }
        singelImage.innerHTML= output;
}