function handleClick(){
    let agora = new Date()
    let ano = agora.getFullYear()
    
    let idade = ano - document.getElementById('ano').value

    let genero = ''
    if(document.getElementById('fem').checked){
        if(idade>=18){
            genero = 'Mulher'
        }else{
            genero = 'Menina'
        }   
    }else if(document.getElementById('masc').checked){
        if(idade>=18){
            genero = 'Homem'
        }else{
            genero = 'Menino'
        }
    }else{
        genero = 'Não binário'
    }

    document.getElementById('imgIn').style.display = 'unset'
    if(genero=='Menina' || genero=='Mulher'){
        if(idade>=0 && idade<5){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/bebê(0-4)/baby-cute-moe-brilliant-159767.jpg" alt="Bebê menina" id="img">'
        }else if(idade>=5 && idade<11){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/criança(5-10)/pexels-photo-2048716.jpeg" alt="Criança menina" id="img">'
        }else if(idade>=11 && idade<21){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/jovem(11-20)/pexels-photo-17509323.jpg" alt="Jovem menina" id="img">'
        }else if(idade>=21 && idade<51){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/adulto(21-50)/pexels-photo-920381.jpg" alt="Mulher adulta" id="img">'
        }else{
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/idoso(51-100)/pexels-photo-3921418.jpg" alt="Mulher idosa" id="img">'
        }
    }else if(genero=='Menino' || genero=='Homem'){
        if(idade>=0 && idade<5){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/bebê(0-4)/pexels-photo-3845492.jpg" alt="Bebê menino" id="img">'
        }else if(idade>=5 && idade<11){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/criança(5-10)/pexels-photo-5905497.jpg" alt="Criança menino" id="img">'
        }else if(idade>=11 && idade<21){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/jovem(11-20)/pexels-photo-207582.jpg" alt="Jovem menino" id="img">'
        }else if(idade>=21 && idade<51){
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/adulto(21-50)/pexels-photo-1229356.jpg" alt="Homem adulto" id="img">'
        }else{
            document.getElementById('imgIn').innerHTML = '<img src="./src/img/idoso(51-100)/pexels-photo-3831645.jpg" alt="Homem adulto" id="img">'
        }
    }

    //inserindo os dados coletados no HTML
    document.getElementsByTagName('p')[2].style.display = 'unset'
    document.getElementById('genero').innerText = genero
    document.getElementById('idade').innerText = idade

    console.log(document.getElementById('ano').value)
}