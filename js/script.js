// Targeting for user info api area
var overview = document.querySelector(".overview");
//Github username
var gitUserName = "Matthewpco";
// Targeting list
var repoList = document.querySelector(".repo-list");


// Fetch Github user data
const getUserData = async function() {
    const res = await fetch(
        `https://api.github.com/users/${gitUserName}`
        );

        const uData = await res.json();
        popData(uData);
}
getUserData();

// Populate fetched data 
let popData = (uData) => {
   let dataBody =  document.createElement("div");
   dataBody.classList.add("user-info");
   dataBody.innerHTML = `<figure>
   <img alt="user avatar" src=${uData.avatar_url} />
 </figure>
 <div>
   <p><strong>Name:</strong> ${uData.name}</p>
   <p><strong>Bio:</strong> ${uData.bio}</p>
   <p><strong>Location:</strong> ${uData.location}</p>
   <p><strong>Number of public repos:</strong> ${uData.public_repos}</p>
 </div> `;
overview.append(dataBody)
getRepoData();
};


// Fetch Github repo data
const getRepoData = async function () {
  const res = await fetch(
    `https://api.github.com/users/${gitUserName}/repos?per_page=100&sort=updated`
  );

  const repoData = await res.json();
  popRepo(repoData);
};

// Populate repo data

const popRepo = (repoData) => {
  for (const repo of repoData) {
    const repoLi = document.createElement("li");
    repoLi.classList.add(".repo");
    repoLi.innerHTML = `<h3> ${repo.name} </h3>`;
    repoList.append(repoLi);
  }
}