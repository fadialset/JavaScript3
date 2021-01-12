"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

//////////////    CREAT BODY ELEMENTS //////////
const body = document.body;
const header = document.createElement('header');
const footer = document.createElement('footer');
const headerHeading = document.createElement('h1');
const footerHeading = document.createElement('h1');
const select = document.createElement('select');
const emptyOption = document.createElement('option');
const container = document.createElement('div');
const contributors = document.createElement('div');
const contributorsCardsDiv = document.createElement('div');
const reposotories = document.createElement('div');
reposotories.id = 'reposotories';
const contributorsTitle = document.createElement('div');
contributors.id = 'contributors';
const contributorsHeading = document.createElement('h2');
const list = document.createElement('ul');
const repo = document.createElement('li');
const description = document.createElement('li');
const forks = document.createElement('li');
const updated = document.createElement('li');
const repoName = document.createElement('p');
const repoDescription = document.createElement('p');
const repoForks = document.createElement('p');
const repoUpdated = document.createElement('p');



//////////////     BODY ELEMENTS TEXT //////////
repo.textContent = 'Repository :'
description.textContent = 'Description :'
forks.textContent = 'Forks :'
updated.textContent = 'Updated :'
headerHeading.textContent = 'Hack your Repos';
footerHeading.textContent = 'Hack your Repos';
container.className = 'container';
contributorsTitle.className = 'contributorsTitle';
contributorsHeading.textContent = 'Contributors';
emptyOption.innerText = 'Choose the Repo...';
//////////////    APPENDING CHILDS //////////
body.append(header, container, footer);
header.append(headerHeading, select);
footer.appendChild(footerHeading);
container.append(reposotories, contributors);
contributors.append(contributorsTitle,contributorsCardsDiv);
contributorsTitle.appendChild(contributorsHeading);
reposotories.appendChild(list);
list.append(repo, description, forks, updated);
repo.appendChild(repoName);
description.appendChild(repoDescription);
forks.appendChild(repoForks);
updated.appendChild(repoUpdated);
select.appendChild(emptyOption);


////////////////// FETCH API /////////////
const url = `https://api.github.com/orgs/HackYourFuture/repos?per_page=100`;
let contributorURL;
function creatSelectOptions(url){
fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.forEach((repo,index) => {
      const repoName = document.createElement('option');
      repoName.textContent = repo.name;

      select.appendChild(repoName);
      repoName.value = index;
    })
  })
  .catch((error) => {
    contributors.style.display = 'none';
    reposotories.style.display = 'none';
    const errorMessage = document.createElement('div');
    errorMessage.innerText = 'Network request failed';
    errorMessage.id = 'errorMessage';
    container.appendChild(errorMessage);
  })
  
};


function selectRepo(selectNumber) {
  fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
      repoName.innerText = jsonData[selectNumber].name;
      repoDescription.innerText = jsonData[selectNumber].description;
      repoForks.innerText = jsonData[selectNumber].forks;
      repoUpdated.innerText = jsonData[selectNumber].updated_at;
      contributorURL = jsonData[selectNumber].contributors_url;
      console.log(contributorURL)
      selectContributor(contributorURL);
    })
};


function selectContributor(contributorsUrl) {
  contributorsCardsDiv.innerHTML = '';
  fetch(contributorsUrl)
    .then(response => response.json())
    .then((jsonData) => {
      jsonData.forEach((contributor) => {
        const contributorCard = document.createElement('div');
        const contributorImage = document.createElement('img');
        const contributorName = document.createElement('a');
        const contributions = document.createElement('div');
        contributorCard.id = "contributorCard";
        contributorImage.src = contributor.avatar_url;
        contributorImage.className = 'contributorImage';
        contributorName.innerText = contributor.login;
        contributorName.href = contributor.html_url;
        contributions.innerText = contributor.contributions;
        contributorsCardsDiv.appendChild(contributorCard);
        contributorCard.append(contributorImage, contributorName, contributions);
      })
    })
    .catch((error) => {
    contributors.style.display = 'none';
    reposotories.style.display = 'none';


    const errorMessage = document.createElement('div');
    errorMessage.innerText = 'Network request failed';
    errorMessage.id = 'errorMessage';
    container.appendChild(errorMessage);
  })
};

function main() {
  creatSelectOptions(url);
  select.addEventListener('change', (e) => {
  selectRepo(e.target.value);   
})
};

window.addEventListener('load', () => {
  main()
})