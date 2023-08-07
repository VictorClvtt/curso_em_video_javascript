function contar(){
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)

    document.getElementById('cont').style.color = 'black'
    if(passo>0){
        if(inicio<fim){
            document.getElementById('cont').innerText = inicio
            while(inicio<fim){
                inicio += passo
                if(inicio<fim){
                    document.getElementById('cont').innerText += '👉' + inicio
                }else{
                    document.getElementById('cont').innerText += '👉🚩'
                }
            }
        }else if(inicio>fim){
            document.getElementById('cont').innerText = inicio
            while(inicio>fim){
                inicio -= passo
                if(inicio>fim){
                    document.getElementById('cont').innerText += '👉' + inicio
                }else{
                    document.getElementById('cont').innerText += '👉🚩'
                }
            }
        }else{
            document.getElementById('cont').innerText += '🚩'
        }
    }else{
        document.getElementById('cont').style.color = 'red'
        document.getElementById('cont').style['font-size'] = '25px'
        document.getElementById('cont').innerText = '[ERRO] O passo deve ser maior que 0'
    }
}