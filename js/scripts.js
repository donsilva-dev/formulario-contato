const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

	event.preventDefault();

	// Verifica se o formulário é válido
	if (!form.checkValidity()) {

		console.log("Formulário inválido, verifique os campos");

		// Mostra as mensagens padrão do navegador
		form.reportValidity();

		return; // IMPORTANTE: para aqui e NÃO envia

	}

	emailjs.sendForm(
		"service_zxo1ebn",
		"template_8dmuv1s",
		this
	)
		.then(() => {

			console.log("Mensagem enviada!");
			form.reset();

		})
		.catch((error) => {

			console.log("Erro:", error);

		});

});

