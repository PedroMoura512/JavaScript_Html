function contar(){
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }else{
        res.innerHTML = 'Contando: <br> ' //<br> quebra a linha no html
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando passo como 1')
            p = 1
        }
        if (i < f){
            for(c = i; c <= f; c += p){
                //emoji da mão
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else if(i > f){
            for(c = i; c >= f; c -= p){
                //emoji da mão
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        //emoji do final
        res.innerHTML += `\u{1F4CD}`
    }
}