// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Lista de heróis (uso de laço de repetição)
const herois = [
    { nome: "Arthas", xp: 8500 },
    { nome: "Jaina", xp: 1200 },
    { nome: "Thrall", xp: 10500 }
];

// Laço para classificar todos os heróis
for (let i = 0; i < herois.length; i++) {
    classificarHeroi(herois[i].nome, herois[i].xp);
}
