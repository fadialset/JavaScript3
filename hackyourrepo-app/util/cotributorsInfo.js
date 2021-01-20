function selectContributor(contributorsUrl) {
  contributorsCardsDiv.innerHTML = '';
  fetch(contributorsUrl)
    .then(response => response.json())
    .then((jsonData) => {
       DisplayList(jsonData, listElement, rows, currentPage);
        SetupPagination(jsonData, paginationElement, rows);    
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