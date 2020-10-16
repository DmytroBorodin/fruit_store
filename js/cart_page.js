'use strict'

let plusBtnsArr = [...document.querySelectorAll('.plus')];
let minusBtnsArr = [...document.querySelectorAll('.minus')];
let countersArr = [...document.querySelectorAll('.counter')];
let pricesArr = [...document.querySelectorAll('.item-price')];

let productsPrice = document.getElementById('subtotal');
let deliveryFee = document.getElementById('fee');
let taxPrice = document.getElementById('tax');
let totalPrice = document.getElementById('total-price');

let cardsArr = [...document.querySelectorAll('.cart-product-card')];
let removeBtnsArr = [...document.querySelectorAll('.remove')];

let increase = (countElem) => {
	let num = Number(countElem.innerHTML) + 1;
	return num; 
}

let decrease = (countElem) => {
	let counter = Number(countElem.innerHTML); 
	if (counter > 0) {
		let num = Number(countElem.innerHTML) - 1;
		return countElem.innerHTML = num;
	}else {
		return 0;
	} 
}

let convertToNumber = (elem) => {
	return Number(elem.innerHTML.replace('$', ''));
}

let totalProductsPrice = () => {
	let sum = 0;
	for (let i = 0; i < countersArr.length; i++) {
		sum += Math.round(convertToNumber(countersArr[i])*convertToNumber(pricesArr[i])*100)/100;
	}
	return sum;
}

let feeCounter = (subtotal) => {
	return Math.round(subtotal*0.02847*100)/100;
}

let taxCounter = (subtotal) => {
	return Math.round(subtotal*0.03379*100)/100;
}

let setPricesValues = (subtotal) => {
	let fee = feeCounter(subtotal);
	let tax = taxCounter(subtotal);
	let sum =  Math.round((tax + fee + subtotal)*100)/100;
	productsPrice.innerHTML = `$${subtotal}`;
	deliveryFee.innerHTML = `$${fee}`;
	taxPrice.innerHTML = `$${tax}`;
	totalPrice.innerHTML = `$${sum}`;
}

plusBtnsArr.forEach(pl => {
	pl.addEventListener('click', () => {
		let index = plusBtnsArr.indexOf(pl);
		let counter = increase(countersArr[index]);
		countersArr[index].innerHTML = counter;
		let subtotal = totalProductsPrice();
		setPricesValues(subtotal);
	})
})

minusBtnsArr.forEach(mn => {
	mn.addEventListener('click', () => {
		let index = minusBtnsArr.indexOf(mn);
		let counter = decrease(countersArr[index]);
		countersArr[index].innerHTML = counter;
		let subtotal = totalProductsPrice();
		setPricesValues(subtotal);
	})
})

removeBtnsArr.forEach(rBtn => {
	rBtn.addEventListener('click', () => {
		let index = removeBtnsArr.indexOf(rBtn);
		cardsArr[index].classList.add('disable');
	})
})
