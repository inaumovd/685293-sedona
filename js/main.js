var button = document.querySelector(".hotel-search-btn");
var form = document.querySelector(".search-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("search-form-hide");
});