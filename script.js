document.querySelector("#search").addEventListener("click", submitHandler);
    
function submitHandler() {
    let userInputDescription = document.getElementById("description").value;
    let userInputLocation = document.getElementById("location").value;

    fetchJobs(userInputDescription, userInputLocation);
}

function fetchJobs(userInputDescription, userInputLocation) {
    let url = new URL(`https://jobs.github.com/positions.json?
    description=${userInputDescription}&location=${userInputLocation}`);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayJobs(data);
        });
}

const displayJobs = (data) => {
    document.querySelector("#results").innerHTML = data.map(jobListingMapper);
}

const jobListingMapper = (data) => {
    const { title, company_logo, company_url, company, description } = data;
    return `<div>
        <h3>${title}</h3>
        <img src="${company_logo} alt="Company Image"/>
        <a href="${company_url}">
            <p>Company: ${company}</p>
        </a>
        <p>${description}</p>
    </div>`
}