/*
function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltabuada')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!!')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //item.value = `tab${c}` ----> importante para outras linguagens
            tab.appendChild(item)
            c++
        }
           
    }
}
*/
function gerar() {
    let num = document.getElementById('txtnum')
    if (num.value.length > 0){
        window.alert('Por favor digite um número!!')
    }
}