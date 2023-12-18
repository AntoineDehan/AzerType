const listeMots = ["Cachalot","Pétunia","Serviette"]
const ListePhrases = ["Pas de panique !","La vie, l'univers et le reste","Merci pour le poisson"]
let score = 0

let choix = prompt("Veuillez choisir la liste : mots ou phrases")
while (choix !== "choix" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste : mots ou phrases")
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Ecrivez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
} else  {
    for (let i = 0; i < ListePhrases.length; i++) {
        let motUtilisateur = prompt("Ecrivez la phrase : " + ListePhrases[i])
        if (motUtilisateur === ListePhrases[i]) {
            score++
        }
    }
}



console.log("Votre score est de : " + score)