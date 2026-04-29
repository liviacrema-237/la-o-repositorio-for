let inicio = Number(prompt("Digite o numero inicial do intervalo:"))
let fim = Number(prompt("Digite o numero final do intervalo:"));
let pares = "";

for(let i = inicio; i <= fim; i++) {
    if(i % 2 === 0) {
pares +=i + " ";
    }
}
alert("Numeros pares encontrados: " + pares);