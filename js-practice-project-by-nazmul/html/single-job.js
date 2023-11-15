// Selectors for elements on the single job page
const singleJobTitleElement = document.getElementById('singleJobTitle');
const singleJobTypeElement = document.getElementById('singleJobType');
const singleJobSalaryElement = document.getElementById('singleJobSalary');
const singleJobDeadlineElement = document.getElementById('singleJobDeadline');

// Function to fetch and display the details of a single job
function displaySingleJobDetails(jobId) {
    const singleJobUrl = `${url}/${jobId}`;
  
    fetch(singleJobUrl)
      .then((res) => res.json())
      .then((data) => {
        singleJobTitleElement.textContent = data.title;
        singleJobTypeElement.textContent = `Type: ${data.type}`;
        singleJobSalaryElement.textContent = `Salary: ${data.salary}`;
        singleJobDeadlineElement.textContent = `Deadline: ${data.deadline}`;
        // Add more details as needed
  
        // Check if the job has related jobs
        if (data.relatedJobs && data.relatedJobs.length > 0) {
          renderRelatedJobs(data.relatedJobs);
        }
      });
  }

// Extract job ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const jobIdFromUrl = urlParams.get('id');

// Check if there is a job ID in the URL and display its details
if (jobIdFromUrl) {
  displaySingleJobDetails(jobIdFromUrl);
}