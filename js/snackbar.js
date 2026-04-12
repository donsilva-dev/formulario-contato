const snackbar = document.getElementById("snackbar");

export function showSnackbar(type) {

    if (type === "success") {
        snackbar.innerHTML = `
            <span class="icon">✔</span>
            <div>
                <strong>Mensagem enviada!</strong><br>
                <small>Obrigado por preencher o formulário. Entraremos em contato em breve!</small>
            </div>
        `;
        snackbar.style.backgroundColor = "#2f4f4f";
    } else {
        snackbar.innerHTML = `
            <span class="icon">❌</span>
            <div>
                <strong>Erro</strong><br>
                <small>Preencha corretamente todos os campos obrigatórios.</small>
            </div>
        `;
        snackbar.style.backgroundColor = "#8b0000";
    }

    snackbar.classList.add("show");

    setTimeout(() => {
        snackbar.classList.remove("show");
    }, 3000);
}


