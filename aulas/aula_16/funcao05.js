// Função recursiva
function fat_rec(n){
    if(n==1){
        return 1
    }else{
        return n * fat_rec(n-1)
    }
}

console.log(fat_rec(5))