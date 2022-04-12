function buscarEndereco(){

        let cep = document.querySelector('#cep').value

        let url = `https://viacep.com.br/ws/${cep}/json/`

        fetch(url).then(function(response){
            response.json().then(mostrarEndereco)  
        })
} 

function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado')
    if (dados.erro) {
        resultado.innerHTML = 'Não foi possível localizar o endereço!'
    } else {   
    resultado.innerHTML = `<p>Logradouro: ${dados.logradouro}</p>
                           <p>Complemento: ${dados.complemento}</p> 
                           <p>Bairro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade}</p>
                           <p>Estado: ${dados.uf}</p>`

    }
}