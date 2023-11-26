/// ************ Get Job list (Function to handle job list) ************ ///
async function getJobList (){

    const jobResponse = await fetch ('http://localhost:9000/jobs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const jobData = await jobResponse.json();
    const jobList = document.querySelector(".jobs-list");

    let jobListHtml = '';
    jobData.forEach((job) => {
        jobListHtml += `
            <div class="lws-single-job">

                <div class="flex-1 min-w-0">
                    <h2 class="lws-title">${job.title}</h2>
                    <div class="job-footers">
                        <div class="lws-type">
                            <i class="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                            ${job.type}
                        </div>
                        <div class="lws-salary">
                            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                            ${job.salary}
                        </div>
                        <div class="lws-deadline">
                            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                            ${job.deadline}
                        </div>
                    </div>
                </div>

                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="hidden sm:block">
                        <button type="button" class="lws-edit btn btn-primary">
                            <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </span>

                    <span class="sm:ml-3">
                        <button type="button" class="lws-delete btn btn-danger" data-job-id="${job.id}">
                            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                            Delete
                        </button>
                    </span>
                </div>
        </div>`;
        
    });
    jobList.innerHTML = jobListHtml;

}
getJobList();



/// ************ Section Hide and Show Functionality ************ ///
// Function to show "All Available Jobs" section
async function showAllJobsSection() {
    document.getElementById('all-available-job').style.display = 'block';
    document.getElementById('add-available-job').style.display = 'none';
    await getJobList(); // Wait for getJobList to complete
}

// Function to show "Add New Job" section
function showAddNewJobSection() {
    document.getElementById('all-available-job').style.display = 'none';
    document.getElementById('add-available-job').style.display = 'block';
}

// Initial setup: show "All Available Jobs" section
showAllJobsSection();

// Event listener for "All Available Jobs" menu
document.getElementById('lws-alljobs-menu').addEventListener('click', showAllJobsSection);

// Event listener for "Add New Job" menu
document.getElementById('lws-addJob-menu').addEventListener('click', showAddNewJobSection);




/// ************ Add New Job (Function to handle form submission) ************ ///
async function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('add-new-job-form');
    
    // Get form data
    const formData = new FormData(form);
    const jobData = {};
    
    formData.forEach((value, key) => {
        jobData[key] = value;
    });

    // Send a POST request to your API
    try {
        const response = await fetch('http://localhost:9000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });

        if (response.ok) {
            // The job was successfully added, you can handle this as needed
            console.log('Job added successfully!');

            // Introduce a delay before updating the job list
            setTimeout(async () => {
                await showAllJobsSection();
            }, 1000); // Adjust the delay as needed
        } else {
            // Handle errors
            console.error('Error adding job:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Attach the form submission handler to the form
document.getElementById('add-new-job-form').addEventListener('submit', handleFormSubmission);




/// ************ Handle Seraching function and Sorting function ************///

 // Function to handle search input
 function handleSearch() {
    const searchInput = document.getElementById('lws-searchJob').value.toLowerCase();
    const jobList = document.querySelector('.jobs-list');
    const jobItems = jobList.getElementsByClassName('lws-single-job');

    // Iterate through job items and hide/show based on the search term
    Array.from(jobItems).forEach((jobItem) => {
        const jobTitle = jobItem.querySelector('.lws-title').textContent.toLowerCase();
        if (jobTitle.includes(searchInput)) {
            jobItem.style.display = 'block';
        } else {
            jobItem.style.display = 'none';
        }
    });
}

// Function to handle sorting
function handleSort() {
    const sortBy = document.getElementById('lws-sort').value;
    const jobList = document.querySelector('.jobs-list');
    const jobItems = jobList.getElementsByClassName('lws-single-job');

    // Convert HTMLCollection to Array for easier manipulation
    const jobArray = Array.from(jobItems);

    switch (sortBy) {
        case 'lowToHigh':
            jobArray.sort((a, b) => {
                const salaryA = parseFloat(a.querySelector('.lws-salary').textContent.replace(/[^0-9.-]+/g, ''));
                const salaryB = parseFloat(b.querySelector('.lws-salary').textContent.replace(/[^0-9.-]+/g, ''));
                return salaryA - salaryB;
            });
            break;
        case 'highToLow':
            jobArray.sort((a, b) => {
                const salaryA = parseFloat(a.querySelector('.lws-salary').textContent.replace(/[^0-9.-]+/g, ''));
                const salaryB = parseFloat(b.querySelector('.lws-salary').textContent.replace(/[^0-9.-]+/g, ''));
                return salaryB - salaryA;
            });
            break;
        default:
            // For 'Default', maintain the original order
            break;
    }

    // Append sorted job items back to the job list
    jobArray.forEach((jobItem) => {
        jobList.appendChild(jobItem);
    });
}


// Function to handle job deletion
async function handleJobDeletion(event) {
    // Assuming the job id is stored as a data attribute in the button
    const jobId = event.currentTarget.dataset.jobId;
    console.log('Deleting job with ID:', jobId);

    // Perform the deletion by sending a DELETE request to your API
    try {
        const response = await fetch(`http://localhost:9000/jobs/${jobId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Delete response:', response);

        if (response.ok) {
            // Job deleted successfully, update the job list
            await getJobList();
        } else {
            // Handle deletion error
            console.error('Error deleting job:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Add event listener to the "Delete" buttons after the job list is loaded
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('lws-delete')) {
        handleJobDeletion(event);
    }
});