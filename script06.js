let armas = ["granada", "laser", "espada", "Ak", "12", "metralhadora"];

let ataques = [];

ataques.push("marvin");
ataques.push(armas[5]);
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[5]);

 console.log("nome do robô:",  ataques[0]);

for (let i = 0; i < ataques.length; i++) {
    if (i==0){
        console.log("nome do robô " +  ataques[i]);
        //console.log("nome do robo", &(ataques[i]));
    }else {
        console.log("Ataque " + i + ": " + ataques[i])
        //console.log("ataques" &)
    }
}

