let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];
let pizza = []

pizza.push(massas[1]);
pizza.push(molhos[0]);
pizza.push(queijos[0]);
pizza.push(carnes[2]);
pizza.push(vegetais[0]);
pizza.push(vegetais[1]);
pizza.push(vegetais[3]);

console.log("Pizza montada:");
for (let i = 0; i < pizza.length; i++) {
    if (i==0 && pizza[i] == massas[1]) {
        console.log("hmm... ta fit!");
    }
    console.log(pizza[1])
}
    

