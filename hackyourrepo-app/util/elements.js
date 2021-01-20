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
contributorsCardsDiv.id = 'contributorsCardsDiv';
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