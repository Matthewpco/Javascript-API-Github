// Targeting for user info api area
var overview = document.querySelector(".overview");
//Github username
var gitUserName = "Matthewpco";

const getData = async function() {
    const res = await fetch(
        `https://api.github.com/users/${gitUserName}`
        );

        const data = await res.json();
        console.log(data)
        popData(data);
}

getData();
console.log("end of line test");

let popData = (data) => {
   let dataBody =  document.createElement("div");
   dataBody.classList.add("user-info");
   dataBody.innerHTML = `<figure>
   <img alt="user avatar" src=${data.avatar_url} />
 </figure>
 <div>
   <p><strong>Name:</strong> ${data.name}</p>
   <p><strong>Bio:</strong> ${data.bio}</p>
   <p><strong>Location:</strong> ${data.location}</p>
   <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
 </div> `;
overview.append(dataBody)
};