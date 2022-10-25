const form = document.querySelector("#login-form");

let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

const pass_reg = /[a-zA-Z\d]{6,}$/;
// merda de regex

username.addEventListener("input", validate);
password.addEventListener("input", validate);

form.addEventListener("submit", function (e) {
	e.preventDefault();

	alert("SUBMITED");
});

function validate(e) {
	let target = e.target;
	if (target.name == "password") {
		//validação password
		if (pass_reg.test(target.value)) {
			target.classList.add("valid");
			target.classList.remove("invalid");
		} else {
			target.classList.add("invalid");
			target.classList.remove("valid");
		}
	}
	if (target.name == "username") {
		//validação username
		if (target.value.length >= 4) {
			target.classList.add("valid");
			target.classList.remove("invalid");
		} else {
			target.classList.add("invalid");
			target.classList.remove("valid");
		}
	}
}
