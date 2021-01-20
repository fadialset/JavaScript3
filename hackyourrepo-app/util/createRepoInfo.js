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