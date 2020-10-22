'use strict'

'use strict'

let viewItemsArr = [...document.querySelectorAll('.view-item')];
let detailTextArr = [...document.querySelectorAll('.details-text')];

let counter = document.querySelector('.counter');
let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let totalPrice = document.querySelector('.price');

let prices = {
	orange: 124,
}


let increase = (countElem) => {
	let num = Number(countElem.innerHTML) + 1;
	if (num < 10) {
		countElem.innerHTML = '0' + num; 
	}else {
		countElem.innerHTML = num; 
	}
	return num;
}

let decrease = (countElem) => {
	let counter = Number(countElem.innerHTML); 
	if (counter > 0) {
		let num = Number(countElem.innerHTML) - 1;
		if (num <= 0){
			countElem.innerHTML = 0; 
		}else if (num < 10) {
			countElem.innerHTML = '0' + num; 
		}else {
			countElem.innerHTML = num; 
		}
		return num;
	}else {
		return 0;
	}
}
viewItemsArr.forEach(item => {
	item.addEventListener('click', () => {
		viewItemsArr.forEach(btn => {
			btn.classList.remove('active');
		});
		detailTextArr.forEach(text => {
			text.classList.remove('active');
		});
		item.classList.add('active');
		let index = viewItemsArr.indexOf(item);
		detailTextArr[index].classList.add('active');
	});
});

plusBtn.addEventListener('click', () => {
	let quantity = increase(counter);
	totalPrice.innerHTML = `$${Math.round(prices.orange*quantity*100)/100}`;
});

minusBtn.addEventListener('click', () => {
	let quantity = decrease(counter);
	totalPrice.innerHTML = `$${Math.round(prices.orange*quantity*100)/100}`;
})



