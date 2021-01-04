"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const firstRepo = document.getElementById('SampleRepo1');
firstRepo.innerText = placeholderRepos[0].name;
const secondRepo = document.getElementById('AndAnotherOne');
secondRepo.innerText = placeholderRepos[1].name;
const thirdRepo = document.getElementById('HYF-Is-The-Best');
thirdRepo.innerText = placeholderRepos[2].name;
const repos = document.getElementById('repos');


const repoName = document.getElementById("name");
const description = document.getElementById("description");
const forks = document.getElementById("forks");
const updateInfo = document.getElementById("updated");

repos.onchange = () => {
  const selectedRepo = placeholderRepos[repos.value];
  repoName.innerText = selectedRepo.name;
  description.innerText = selectedRepo.description;
  forks.innerText = selectedRepo.forks;
  updateInfo.innerText = selectedRepo.updated;
}
/// in the console I am facing an syntax error that name is undefined but the function works and I dont know why 