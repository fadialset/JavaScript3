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
contributors.appendChild(contributorsTitle);
contributorsTitle.appendChild(contributorsHeading);
reposotories.appendChild(list);
list.append(repo, description, forks, updated);
repo.appendChild(repoName);
description.appendChild(repoDescription);
forks.appendChild(repoForks);
updated.appendChild(repoUpdated);
select.appendChild(emptyOption)

////////////////// FETCH API /////////////
const url = `https://api.github.com/orgs/HackYourFuture/repos?per_page=100`;
function creatSelectOptions(url){
fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.map((repo) => {
      const repoName = document.createElement('option');
      repoName.textContent = repo.name;
      select.appendChild(repoName);
      
    for (let i = 0; i <= select.length; i++){
      repoName.value = i -1;
    }
    })
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
    })
};
function selectContributor(repositoryName) {
  const contributorsUrl = `https://api.github.com/repos/HackYourFuture/${repositoryName}/contributors`;
  fetch(contributorsUrl)
    .then(response => response.json())
    .then((jsonData) => {
      jsonData.forEach((contributor) => {
        const contributorCard = document.createElement('div');
        contributorCard.id = "contributorCard";
        const contributorImage = document.createElement('img');
        contributorImage.src = contributor.avatar_url;
        contributorImage.className = 'contributorImage';
        const contributorName = document.createElement('a');
        contributorName.innerText = contributor.login;
        contributorName.href = contributor.html_url;
        const contributions = document.createElement('div');
        contributions.innerText = contributor.contributions;

        contributors.appendChild(contributorCard);
        contributorCard.append(contributorImage,contributorName,contributions)
      })
  })
};

function main() {
  creatSelectOptions(url);
  select.addEventListener('change', (e) => {
  selectRepo(e.target.value);
  selectContributor(e.target[e.target.value].innerText)
})
};

window.addEventListener('load', () => {
  main()
})