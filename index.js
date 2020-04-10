import { products } from './products.js';
import { renderMostpopularItems } from './App.js';

function glider() {
	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		scrollLock: true,
		dots: '#resp-dots',
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 775,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: '2',
					slidesToScroll: 'auto',
					duration: 0.25
				}
			},
			{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
					slidesToShow: '3',
					slidesToScroll: 1,
					duration: 0.25
				}
			}
		]
	});
}

const sliderItmesContainer = document.getElementById('slider-items-container');
renderMostpopularItems(products, [ 1, 3, 5, 7, 8, 11, 15 ], sliderItmesContainer, '');
glider();
