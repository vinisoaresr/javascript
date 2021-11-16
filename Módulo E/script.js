function gerar_tabuada(){
    let num = document.getElementById('value'); 
    let tab = document.getElementById('seltab');

    if (num.value.length == 0){
        window.alert('Entre com algum valor');
    }
    else {
        let n = Number(num.value)
        let i = 1
        tab.innerHTML = ''

        while (i <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
            i++
        }
    }
}


function contar(){
    res.innerHTML = ''
    let txt_ini = parseFloat(document.getElementById('txt_ini').value);
    let txt_fim = parseFloat(document.getElementById('txt_fim').value);
    let txt_passo = parseFloat(document.getElementById('txt_passo').value); 
    
    if (txt_passo === 0){
        window.alert('Entrada de dados inválida! o passo deve ser maior do que zero, preencha novamente.')
    }
    else if (txt_ini === txt_fim){
        window.alert('Entrada de dados inválida! Os valores de início e fim são iguais, preencha novamente.')
    }
    else {
        res.innerHTML = 'Contando... <br>'
        if (txt_ini < txt_fim){
            for (c=txt_ini; c < txt_fim; c += txt_passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            for (c=txt_ini; c > txt_fim; c -= txt_passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }    
    res.innerHTML += `\u{1F3C1}`
    }
}
