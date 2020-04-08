// function adicionarItem() {
//     const meuInput = document.getElementById("meu-input")
//     const minhaLista = document.getElementById("segunda")
//     minhaLista.innerHTML += "<li>" + meuInput.value + "</li>"
// }

function adicionarItem() {

   const meuSelect = document.getElementById("meu-select").value;

    const meuInput = document.getElementById("meu-input").value;
    if(meuInput !== ""){
        switch (meuSelect) {
            case 'segunda':
                document.getElementById("segunda1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'terca':
                document.getElementById("terca1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'quarta':
                document.getElementById("quarta1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'quinta':
                document.getElementById("quinta1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'sexta':
                document.getElementById("sexta1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'sabado':
                document.getElementById("sabado1").innerHTML += "<li>" + meuInput + "</li>";
                break;
            case 'domingo':
                document.getElementById("domingo1").innerHTML += "<li>" + meuInput + "</li>";
                break;
    
        }

        document.getElementById("meu-input").value = "";
    }else{
        alert("Favor inserir alguma info.");
    }


    

}

// function adicionarItem() {
//     const meuInput = document.getElementById("meu-input")

//     const diaDaSemana = document.getElementById("meu-select").value;

//     document.getElementById(diaDaSemana) += "<li>" + meuInput + "</li>"




// }

