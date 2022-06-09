var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.result');

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	if (elInput.value % 100 == 0 && elInput.value % 400 == 0) {
		elResult.textContent = 'etot god visokokosniy';
	} else if (elInput.value % 4 == 0 && elInput.value % 100 != 0) {
		elResult.textContent = 'etot god visokokosniy';
	} else {
		elResult.textContent = 'v etom godu 365 dney';
	}
});
