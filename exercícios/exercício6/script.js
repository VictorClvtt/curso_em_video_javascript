let nums = [];

function adicionarNumero() {
  let numInput = document.getElementById('num');
  let num = numInput.value;

  if (nums.includes(num)) {
    let item = document.createElement('option');
    item.style.color = 'red';
    item.text = `Número ${num} já adicionado anteriormente!`;
    document.getElementById('numIn').appendChild(item);
  } else {
    let item = document.createElement('option');
    item.text = `Número ${num} adicionado!`;
    document.getElementById('numIn').appendChild(item);
    nums.push(num);
  }
}

function finalizar() {
  if (nums.length === 0) {
    document.getElementById('info').innerHTML = '<p>Impossível calcular, não há elementos na lista</p>';
  } else {
    // Exibindo a quantidade de valores
    let info = nums.length !== 1 ? `<p>Ao todo temos ${nums.length} elementos</p>` : `<p>Ao todo temos ${nums.length} elemento</p>`;

    // Exibindo maior e menor
    let maxNumber = Math.max(...nums);
    let minNumber = Math.min(...nums);
    info += `<p>O maior valor inserido foi ${maxNumber}</p>`;
    info += `<p>O menor valor inserido foi ${minNumber}</p>`;

    // Exibindo a soma
    let sum = nums.reduce((acc, current) => acc + Number(current), 0);
    info += `<p>A soma de todos os valores inseridos é ${sum}</p>`;

    // Calculando e exibindo a média
    let average = sum / nums.length;
    info += `<p>A média dos valores inseridos é ${average}</p>`;

    document.getElementById('info').innerHTML = info;
  }
}