let amigo = {
    nome: 'Victor',
    sexo: 'Masculino',
    peso: 75,
    engordar(p){
        this.peso += p
    }
}

console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)