let numero = Number(prompt("Digite um numero para ver a contagem"));
let resultado = "";
for (let i = 1; i <= numero; i++){
    resultado = (`${resultado} ${i}`);
}

alert(resultado)