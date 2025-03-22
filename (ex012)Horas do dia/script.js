function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //imagem de dia
        img.src = 'fotodia.png'
        //mudando a cor do fundo
        document.body.style.background = '#4e88c0'
    }else if(hora > 12 && hora < 18){
        //imagem de tarde
        img.src = 'fototarde.png'
        //mudando a cor do fundo
        document.body.style.background = '#ff900a'
    }else{
        //imagem de noite
        img.src = 'fotonoite.png'
        //mudando a cor do fundo
        document.body.style.background = '#57438d'
    }
    //dando bom dia boa tarde e boa noite dependendo na hora
    var comp = document.getElementById('comprimento')
    if (hora >= 0 && hora < 12){
        comp.innerHTML = 'Bom dia!!'
    }else if(hora > 12 && hora < 18){
        comp.innerHTML = 'Boa tarde!!'
    }else{
        comp.innerHTML = 'Boa noite!!'
    }
}