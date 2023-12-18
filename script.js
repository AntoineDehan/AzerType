const listeMots = ["Cachalot","Pétunia","Serviette"]
const ListePhrases = ["Pas de panique !","La vie, l'univers et le reste","Merci pour le poisson"]


function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de : " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    let choix = prompt("Veuillez choisir la liste : mots ou phrases")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veuillez choisir la liste : mots ou phrases")
    }   
        return choix
}

function LancerBoucleJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt("Ecrivez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "mots") {
        score = LancerBoucleJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = LancerBoucleJeu(ListePhrases)
        nbMotsProposes = ListePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}


lancerJeu();