const listElement = contributorsCardsDiv;
const paginationElement = document.createElement('div');
paginationElement.className = 'pagenumbers'
contributors.appendChild(paginationElement)


let currentPage = 1;
let rows = 5;

function DisplayList (items, wrapper, rowsPerPage, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rowsPerPage * page;
	let end = start + rowsPerPage;
	let paginatedItems = items.slice(start, end);
	
	paginatedItems.forEach(item => {
		console.log(item)
		 const contributorCard = document.createElement('div');
        const contributorImage = document.createElement('img');
        const contributorName = document.createElement('a');
        const contributions = document.createElement('div');
        contributorCard.id = "contributorCard";
        contributorImage.src = item.avatar_url;
        contributorImage.className = 'contributorImage';
        contributorName.innerText = item.login;
        contributorName.href = item.html_url;
		contributions.innerText = item.contributions;
		contributorsCardsDiv.appendChild(contributorCard);
        contributorCard.append(contributorImage, contributorName, contributions);
	});
}

function SetupPagination (items, wrapper, rowsPerPage) {
	wrapper.innerHTML = "";

	let pageCount = Math.ceil(items.length / rowsPerPage);
	for (let i = 1; i < pageCount + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (currentPage == page) button.classList.add('active');

	button.addEventListener('click', function () {
		currentPage = page;
		DisplayList(items, listElement, rows, currentPage);

		let currentButton = document.querySelector('.pagenumbers button.active');
		currentButton.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
