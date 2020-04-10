export const createProductCard = (productObj, locationofHTML = '') => {
	const productContainer = document.createElement('div');
	productContainer.style = 'margin: 15px;';
	productContainer.className = 'd-flex justify-content-center';
	productContainer.innerHTML = `<div class="card-container shadow d-flex flex-column justify-content-center">
	<div class="d-flex justify-content-center mx-auto pb-1 pt-4" style="width: 80%;">
		<img src="${locationofHTML}${productObj.imageurl}" style="width: 100%; border-radius: 5px 15px;" alt="">
	</div>
	<div class="pt-2 mx-auto font-weight-bold"
		style="color: #364c63; font-size: 1.3em; width: 80%;">${productObj.name}</div>
	<div class="mx-auto py-2" style="color: #364c63; font-size: 1.1em; width: 80%;">Price : ${productObj.price}$
	</div>
	<div class="mx-auto text-center">
		<button type="button" class="btn btn-secondary m-2">More Details</button>
		<button type="button" class="btn btn-success m-2">Add to Cart</button>
	</div>
	</div>`;

	return productContainer;
};

export const renderProuctList = (
	productsArr,
	category = '',
	containerElement,
	locationofHTML = ''
) => {
	if (category == '') {
		productsArr.forEach((element) => {
			const newListItem = createProductCard(element, locationofHTML);
			containerElement.append(newListItem);
		});
	} else {
		productsArr.forEach((element) => {
			if (element.category == category) {
				const newListItem = createProductCard(element, locationofHTML);
				containerElement.append(newListItem);
			}
		});
	}
};

export const renderMostpopularItems = (
	productsArr,
	idsArr,
	containerElement,
	locationofHTML = ''
) => {
	productsArr.forEach((element) => {
		idsArr.forEach((id) => {
			if (id == element.id) {
				const newListItem = createProductCard(element, locationofHTML);
				containerElement.append(newListItem);
			}
		});
	});
};
