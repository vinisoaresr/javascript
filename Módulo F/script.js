var lista = []
var soma = 0
var media = 0
var cont = 0

function main() {
    let value_input = document.getElementById('value');
    let value_input_int = Number(value_input.value);

    ///validação da entrada:
    if (value_input.value.length == 0){
        window.alert(`Entrada de dados inválida! Informe um número.`)
    }
    else if (value_input_int < 1 || value_input_int > 100){
        window.alert('Entrada de dados inválida! Informe um número dentro do range 1 a 100.')
    }
    else {
        ///verificar se o número está na lista
        if (lista.includes(value_input_int)){
            window.alert('O número já está na lista. Informe outro');
        }
        else{
            lista.push(value_input_int);

            num_tab.innerHTML = ''
            resultado.innerHTML = ''
        
            for (i in lista){
                let item = document.createElement('option')
                item.text += `Valor ${lista[i]} adicionado.`
                num_tab.appendChild(item)
            }
        
        }
    }
    document.getElementById('value').value ='';
}

function finalizar() {
    resultado.innerHTML += `Ao todo, temos ${contar_valores(lista)} números cadastrados. <br>
                            O maior valor é: ${maior_valor(lista)} <br>
                            O menor valor é: ${menor_valor(lista)} <br>
                            A soma dos valores é ${soma_valores(lista)} <br>
                            E a media deles é ${media_valores(lista)} <br>
                            `

}

function contar_valores(lista) { // FUNCIONANDO OK!
    cont = 0
    for (i in lista){
        cont++
    }
    return cont
}

function maior_valor(lista) { // FUNCIONANDO OK!
    let maior = 0
    for (i in lista){
        if (lista[i] > maior){
            maior = lista[i]
        }
    }
    return maior
}

function menor_valor(lista) { // FUNCIONANDO OK!
    let menor = 100
    for (i in lista){
        if (lista[i] < menor){
            menor = lista[i]
        }
    }
    return menor
}

function soma_valores(lista) { // FUNCIONANDO OK!
    soma = 0
    for (i in lista){
        soma = soma + lista[i]
    }
    return soma
}

function media_valores(lista) { // FUNCIONANDO OK!
    media = soma / cont
    return media
}
