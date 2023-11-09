// Selectors
const newJobBody = document.querySelector('.add-new-job-body');
const addPostForm = document.querySelector('.add-post-form');
const jobListBody = document.querySelector('.job-list-body');
const jobList = document.querySelector('.jobs-list');
const singleJob = document.querySelector('.lws-single-job');
const formHeading = document.querySelector('.lws-section-title');

// Submit button selector
const submitButton = document.getElementById('lws-submit');

// Insert Data or Add New Job selector
const jobTitle = document.getElementById('lws-JobTitle');
const jobType = document.getElementById('lws-JobType');
const jobSalary = document.getElementById('lws-JobSalary');
const jobDeadline = document.getElementById('lws-JobDeadline');

// Delete data selector
const editID = document.querySelector('.lws-edit');
const jobDelete = document.querySelector('.lws-delete');

const url = ' http://localhost:9000/jobs';

// Add New Job click events
const addButton = document.getElementById('lws-addJob-menu');

addButton.addEventListener('click', function(e){
    e.preventDefault();

    newJobBody.classList.remove("hidden");
    jobListBody.classList.add("hidden");
});

// Back to job list
const backToJobList = document.getElementById('backToJobList');

backToJobList.addEventListener('click', function(e){
    e.preventDefault();

    newJobBody.classList.add("hidden");
    jobListBody.classList.remove("hidden");
});

// Rendar Job function
function renderJobs(jobs){
   let output = '';  
    jobs.forEach(post => {
        output += `<div class="lws-single-job" data-id="${post.id}">
        <div class="flex-1 min-w-0">
            <h2 class="lws-title">${post.title}</h2>
            <div class="job-footers">
                <div class="lws-type">
                    <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  -->
                    <i class="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                    ${post.type}
                </div>
                <div class="lws-salary">
                    <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                    ${post.salary}
                </div>
                <div class="lws-deadline">
                    <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                    ${post.deadline}
                </div>
            </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="hidden sm:block">
                <button type="button" class="lws-edit btn btn-primary" id="edit-post">
                    <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                    Edit
                </button>
            </span>

            <span class="sm:ml-3">
                <button type="button" class="lws-delete btn btn-danger" id="delete-post">
                    <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                    Delete Post
                </button>
            </span>
        </div>
    </div>`
    });

    jobList.innerHTML = output;    
}

// Get - Read the posts
// Method: GET
fetch(url)
    .then((res)=> res.json())
    .then((data)=> renderJobs(data));

// Job actions behaviour controller
jobList.addEventListener('click',function(e){
    // console.dir(e.target.id);
    e.preventDefault();
    let deleteButtonIsPressed = e.target.id == 'delete-post';
    let editButtonIsPressed = e.target.id == 'edit-post';

    let id = e.target.parentElement.parentElement.parentElement.dataset.id;

    // Delete - Remove the existing post
    // Method: DELETE
    if(deleteButtonIsPressed){
        fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(()=> location.reload())
    }

    // Edit the existing post
    if (editButtonIsPressed) {
        formHeading.innerText = 'Edit Job Post';
        submitButton.innerText = 'Update';
        newJobBody.classList.remove('hidden');
    
        fetch(`${url}/${id}`)
            .then((res) => res.json())
            .then((data) => {
                jobTitle.value = data.title;
                jobType.value = data.type;
                jobSalary.value = data.salary;
                jobDeadline.value = data.deadline;
            });
    }

    // Update - update the existing post
    // Method: PATCH
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: jobTitle.value,
                type: jobType.value,
                salary: jobSalary.value,
                deadline: jobDeadline.value,
            })
        })
            .then((res) => res.json())
            .then(() => location.reload())
    })
    

});

// Create - Insert new Job Post
// Method: POST
addPostForm.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: jobTitle.value,
            type: jobType.value,
            salary: jobSalary.value,
            deadline: jobDeadline.value
        })
    })
    .then((res) => res.json())
    .then((data)=> {
        const dataArray = [];
        dataArray.push(data);
        renderJobs(dataArray);
    });
});


// Job filter by job type
const allAvailableJobs = document.getElementById('lws-alljobs-menu');
const internshipMenu = document.getElementById('lws-internship-menu');
const fulltimeMenu = document.getElementById('lws-fulltime-menu');
const remoteMenu = document.getElementById('lws-remote-menu');

allAvailableJobs.addEventListener('click', function(e){
    e.preventDefault();
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> renderJobs(data));
});
// Filter by Internshop Job
internshipMenu.addEventListener('click', function(e){
    e.preventDefault();
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const intershipItems = data.filter(item => item.type === 'Internship');
        renderJobs(intershipItems);
    });
});
// Fiter by Full Time Job
fulltimeMenu.addEventListener('click', function(e){
    e.preventDefault();
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const fullTimeItems = data.filter(item => item.type === 'Full Time');
        renderJobs(fullTimeItems);
    });
});
// Fiter by Remote Job
remoteMenu.addEventListener('click', function(e){
    e.preventDefault();
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const remoteItems = data.filter(item => item.type === 'Remote');
        renderJobs(remoteItems);
    });
});

// Search the jobs by job title
const searchValue = document.getElementById('lws-searchJob');
console.log(searchValue);

searchValue.addEventListener('input', function() {
    const inputValue = searchValue.value.toLowerCase();
    console.log('Input value:', inputValue);

    fetch(url)
    .then((res)=> res.json())
    .then((data) => {
        const searchedJobs = data.filter(item => item.title.toLowerCase().includes(inputValue));
        renderJobs(searchedJobs);
    })
});


// sort the low to high
const sortMethod = document.getElementById('lws-sort');
sortMethod.addEventListener('change', function(){
    const selectedOption = sortMethod.value;
    console.log(selectedOption);
    if (selectedOption === 'Salary (Low to High)') {
        fetch(url)
            .then((res)=> res.json())
            .then((data) => {
                const jobsLowToHigh = data.slice().sort((a,b) => {
                    const salaryA = parseInt(a.salary);
                    const salaryB = parseInt(b.salary);
                    return salaryA - salaryB;
                });
                renderJobs(jobsLowToHigh);
            });
    } else if(selectedOption === 'Salary (High to Low)'){
        fetch(url)
            .then((res)=> res.json())
            .then((data) => {
                const jobsHighToLow = data.slice().sort((a,b) => {
                    const salaryA = parseInt(a.salary);
                    const salaryB = parseInt(b.salary);
                    return salaryB - salaryA;
                });
                renderJobs(jobsHighToLow);
            });
    }
});