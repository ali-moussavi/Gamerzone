import { products } from '../products.js';
import { renderProuctList } from '../App.js';

const productsList = document.getElementById('prodList');

renderProuctList(products, 'Headphones and Headsets', productsList, '.');
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});
