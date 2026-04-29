let soma = 0;
for( let i = 1;i <= 10; i++) {
    let num = Number(prompt("Digite o" + i + "° numero:"));
    soma += num;
}
alert("A soma total dos números é: " + soma);