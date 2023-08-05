let agora = new Date()
let hora = agora.getHours()

document.getElementById('hora').innerText = hora

if(hora<5 || hora>=19){
    document.getElementById('saudacao').innerText = 'Boa noite!'
    document.getElementById('img').innerHTML += '<img src="./src/pexels-photo-414144.jpg" alt="Noite" id="img">'

    if(hora>=0 && hora<5){
        document.getElementById('msg').style.display = 'unset'
        document.getElementById('msg').innerText = 'Vai dormir vagabundo 😂'

        if(hora==0){
            document.getElementsByTagName('p')[0].innerText = 'Boa noite! é meia noite.'
        }
        if(hora==1){
            document.getElementsByTagName('p')[0].innerText = 'Boa noite! é uma da manhã.'
        }
    }
}else if(hora>=5 && hora<=12){
    document.getElementById('saudacao').innerText = 'Bom dia!'
    document.getElementById('img').innerHTML += '<img src="./src/pexels-photo-4448846.jpg" alt="Dia" id="img">'
    document.body.style.background = 'rgb(255, 231, 113)'
    document.body.style.color = 'black'

    if(hora==12){
        document.getElementsByTagName('p')[0].innerText = 'Bom dia! é meio dia.'
    }
}else if(hora>12 && hora<19){
    document.getElementById('saudacao').innerText = 'Boa tarde!'
    document.getElementById('img').innerHTML += '<img src="./src/pexels-photo-4946701.jpg" alt="Tarde" id="img">'
    document.body.style.background = 'rgb(130, 79, 59)'
}
