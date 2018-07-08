var button = document.qerySelector(".search-btn");
var form = document.qerySelector(".search-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("search-form-hide");
});