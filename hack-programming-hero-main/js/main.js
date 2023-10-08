const milestonesData = JSON.parse(data).data;


// load course milestones data
function loadMilestones(){
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${milestonesData.map(function(milestone) {
    return `<div class="milestone border-b" id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id} )" /></div>
      <div onclick="openMilestone(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules.map(function(module){
        return `<div class="module border-b">
          <p>${module.name}</p>
        </div>`;
      }).join("")}
    </div>
  </div>`;
  }).join("")}`;
}



function openMilestone(milestoneElement, id){

  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const shownActive = document.querySelector(".active");

  // remove show class
  if(shownPanel && !currentPanel.classList.contains("show")){
    shownPanel.classList.remove("show");
  }
  // add show class
  currentPanel.classList.toggle('show');

  // Removed active class
  if(shownActive && !milestoneElement.classList.contains("active")){
    shownActive.classList.remove("active");
  }
  // add show class
  milestoneElement.classList.toggle('active');

  showMilestone(id);

}

function showMilestone(id){a
  const milestoneImage = document.querySelector('.milestoneImage');
  const name = document.querySelector('.title');
  const details = document.querySelector('.details');

  milestoneImage.style.opacity = "0";

  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

// listen for hero image load
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function(){
  this.style.opacity = "1";
}

function markMileStone(checkbox, id){
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  

  if(checkbox.checked){
    //mark as done
    milestonesList.removeChild(item);
    doneList.appendChild(item);

    console.log(item);




  }else{
    //back to mail list
    milestonesList.appendChild(item);
    doneList.removeChild(item);

    //task - do the sorting
    // reload list using reload function
    // points.sort(function(a, b){return a - b});
    window.location.reload(true);
  }
}

loadMilestones();

