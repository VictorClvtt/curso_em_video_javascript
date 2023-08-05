let num = [7, 8, 4, 2, 11];

num.sort((a, b) => a - b);
console.log(`Sorted array: ${num.join(", ")}`);
console.log(`Our array has ${num.length} positions.`);
console.log(`The first value of the array is ${num[0]}`);

for(let i=0;i<num.length;i++){
    console.log(`Posição ${i+1}: ${num[i]}`)
}

let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos+1}`)
