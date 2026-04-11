// Formulario (error)

const form = document.querySelector("form");
const fields = document.querySelectorAll("[required]");

form.addEventListener("submit", function (event) {

	let isValid = true;

	fields.forEach(field => {

		const errorMessage = field.nextElementSibling;

		// CHECKBOX
		if (field.type === "checkbox") {

			if (!field.checked) {

				field.classList.add("error");

				if (errorMessage) {
					errorMessage.textContent = "Você precisa aceitar os termos.";
				}

				isValid = false;

			} else {

				field.classList.remove("error");

				if (errorMessage) {
					errorMessage.textContent = "";
				}

			}

		}

		// OUTROS CAMPOS
		else {

			if (!field.value.trim()) {

				field.classList.add("error");

				if (errorMessage) {
					errorMessage.textContent = "Este campo é obrigatório.";
				}

				isValid = false;

			} else {

				field.classList.remove("error");

				if (errorMessage) {
					errorMessage.textContent = "";
				}

			}

		}

	});

	if (!isValid) {
		event.preventDefault();
	}

});


// REMOVE ERRO AO DIGITAR / MARCAR

fields.forEach(field => {

	const eventType =
		field.type === "checkbox"
			? "change"
			: "input";

	field.addEventListener(eventType, function () {

		const errorMessage = this.nextElementSibling;

		this.classList.remove("error");

		if (errorMessage) {
			errorMessage.textContent = "";
		}

	});

});
