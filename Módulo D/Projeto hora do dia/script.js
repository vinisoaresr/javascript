
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 22 || hora < 0){
        console.log('Erro, hora inválida')
    }
    else {
        if (hora >= 0 && hora < 12){
            img.src = 'img/img-manha.png'
            document.body.style.background = '#e2cd9f'
            console.log('Agora é de manhã ' + hora)
        }
        else if (hora >= 12 && hora < 18){
            document.body.style.background = '#b9846f'
            img.src = 'img/img-tarde.png'
            console.log('Agora é de tarde. ' + hora)
        }
        else {
            document.body.style.background = '#515154'
            img.src = 'img/img-noite.png'
            console.log('Agora é de noite. ' + hora)
        } 
    }
}




