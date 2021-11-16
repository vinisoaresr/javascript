function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var foto = document.getElementById('img')
    var sexo = document.getElementById('mas')

    resultado = ano - fano.value


    console.log(sexo.value)

    if (sexo.value == 'on'){

        if (resultado > 0 && resultado <= 14){
            img.src="img/criança-m.png"
        }
    
        if (resultado > 14 && resultado <= 18){
            img.src="img/jovem-m.png"
        }
    
        if (resultado > 18){
            img.src="img/adulto-m.png"
        }        

    }
    else {

        if (resultado > 0 && resultado <= 14){
            img.src="img/criança-f.png"
        }
    
        if (resultado > 14 && resultado <= 18){
            img.src="img/jovem-f.png"
        }
    
        if (resultado > 18){
            img.src="img/adulto-f.png"
        }

    }
    if (sexo.value === 'on'){
        genero = 'masculino'
    }
    else {
        genero = 'feminino'
    }
    abc.style.textAlign = 'center'
    abc.innerHTML = `Detectamos o gênero ${genero} com ${resultado} anos.`

    console.log(resultado)
}