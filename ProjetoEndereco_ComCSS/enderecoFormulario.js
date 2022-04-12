function buscarEndereco() {
  let cep = document.querySelector('#cep').value

  let url = `https://viacep.com.br/ws/${cep}/json/`

  if (cep.length < 8) {
    alert('Cep não encontrado!')
  }

  fetch(url).then(function (response) {
    response.json().then(mostrarEndereco)
  })
}

function mostrarEndereco(dados) {
  let resultado = document.querySelector('#resultado')
  if (dados.erro) {
    alert('Não foi possível localizar o endereço!')
  } else {
    resultado.innerHTML = `<p>Logradouro: ${dados.logradouro}</p>
                           <p>Complemento: ${dados.complemento}</p> 
                           <p>Bairro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade}</p>
                           <p>Estado: ${dados.uf}</p>`
  }
}

const inputValue = document.querySelector('#cep')
let zipCode = ''

inputValue.addEventListener('keyup', () => {
  zipCode = inputValue.value
  if (zipCode)
    if (zipCode.length === 8) {
      inputValue.value = `${zipCode.substr(0, 5)}-${zipCode.substr(5, 9)}`
      console.log(zipCode)
    }
})
