function gerarTabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('selTab')

    if(num.value.length==0){
        alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        tab.style.display = 'unset'
        tab.innerHTML = ''

        for(let i=1;i<=10;i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    } 
}