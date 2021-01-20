const url = `https://api.github.com/orgs/HackYourFuture/repos?per_page=100`;
let contributorURL;
function creatSelectOptions(url) {
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