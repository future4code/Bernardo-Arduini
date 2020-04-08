function clicouNoBotao(ev) {
    const meuTexto = document.getElementById("meu-input");
    const mostraDigitado = document.getElementById("mostra-digitado");
    mostraDigitado.innerHTML += "<p>"+meuTexto.value+"</p>"
    meuTexto.value = "";
}

function apertouEnter(ev) {
    if (ev.key === "Enter") {
        console.log("vc apertou uma tecla "+ev.key);
        const meuTexto = document.getElementById("meu-input");
        const mostraDigitado = document.getElementById("mostra-digitado");
        mostraDigitado.innerHTML += "<p>"+meuTexto.value+"</p>"
        meuTexto.value = "";
    }
}