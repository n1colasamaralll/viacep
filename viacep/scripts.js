function limpa_formulario_cep(){
    document.getElementById("cep").value="...";
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("uf").value="...";
}
function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("cep").value="...";
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("uf").value="...";
    }
    else{
        limpa_formulario_cep();
        alert("CEP não encontrado")
     }
}


function pesquisacep(valor){
    var cep = valor.replace(/\D/g,'');

    if(cep != ""){

        var validacep = /[0-9]{8}$/;

        if(validacep.test(cep)){
            document.getElementById("cep").value="...";
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("uf").value="...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script)
        }
        else{
            limpa_formulario_cep();
            alert("Insere um cep válido ai namoral")
        }
    }
        else{
            limpa_formulario_cep();
        }
}
