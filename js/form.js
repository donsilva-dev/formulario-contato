import { showSnackbar } from "./snackbar.js";

const form = document.querySelector("form");
const fields = document.querySelectorAll("[required]");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	let isValid = true;

	fields.forEach(field => {
		const errorMessage =
			field.parentElement.querySelector(".error-message");

		if (field.type === "checkbox") {
			if (!field.checked) {
				field.classList.add("error");
				if (errorMessage) {
					errorMessage.textContent =
						"Para enviar esse formulário, concorde em ser contatado.";
				}
				isValid = false;
			} else {
				field.classList.remove("error");
				if (errorMessage) errorMessage.textContent = "";
			}
		} else {
			if (!field.value.trim()) {
				field.classList.add("error");
				if (errorMessage) {
					errorMessage.textContent = "Este campo é obrigatório.";
				}
				isValid = false;
			} else if (field.type === "email" && !field.checkValidity()) {
				field.classList.add("error");
				if (errorMessage) {
					errorMessage.textContent = "Informe um email válido.";
				}
				isValid = false;
			} else {
				field.classList.remove("error");
				if (errorMessage) errorMessage.textContent = "";
			}
		}
	});

	if (isValid) {
		showSnackbar("success");

		setTimeout(() => {
			form.reset();
			clearErrors();
		}, 3000);
	} else {
		showSnackbar("error");
	}
});

function clearErrors() {
	fields.forEach(field => {
		field.classList.remove("error");
		const msg =
			field.parentElement.querySelector(".error-message");
		if (msg) msg.textContent = "";
	});
}

// remove erro ao digitar
fields.forEach(field => {
	const eventType =
		field.type === "checkbox" ? "change" : "input";

	field.addEventListener(eventType, function () {
		this.classList.remove("error");
		const msg =
			this.parentElement.querySelector(".error-message");
		if (msg) msg.textContent = "";
	});
});

