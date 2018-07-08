<<<<<<< HEAD
var button = document.qerySelector(".search-btn");
var form = document.qerySelector(".search-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	hotel.classList.toggle("search-form-hide");
=======
var button = document.querySelector(".hotel-search-btn");
var form = document.querySelector(".search-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("search-form-hide");
>>>>>>> 395cbc4b2a7e6435860c8046916d352bf8098d5d
});