let carro1 = "corolla";
let carro2 = "civic";
let carro3 = "bmw";

const carro = [];
carro[0] = "nivus";
carro[1] = "mercedes";

console.log (carro);
console.table (carro);
console.log (carro.length);


let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);


let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);