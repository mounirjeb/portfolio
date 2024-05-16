function changerLangue() {
    const langueSelect = document.getElementById('langue').value;
    localStorage.setItem('langue', langueSelect); 
    let nouvellePage;

    switch (langueSelect) {
        case 'fr':
            nouvellePage = 'index_fr.html';
            break;
        case 'en':
            nouvellePage = 'index_en.html';
            break;
        case 'nl':
            nouvellePage = 'index_nl.html';
            break;
        default:
            nouvellePage = 'index_fr.html';
    }

    window.location.href = nouvellePage;
}


document.getElementById('langue').addEventListener('change', changerLangue);


const langueStockee = localStorage.getItem('langue');
if (langueStockee) {
    document.getElementById('langue').value = langueStockee;
} else {
    localStorage.setItem('langue', 'fr');
}


const phrase = document.getElementById('intro-texte').textContent.trim();
const introTexte = document.getElementById('intro-texte');
introTexte.textContent = ''; 
let index = 0;

function afficherLettre() {
    introTexte.textContent += phrase[index];
    index++;

    if (index === phrase.length) {
        clearInterval(affichageLettres);
    }
}

const affichageLettres = setInterval(afficherLettre, 100); 

function ouvrirFenetreModal(idActivite, titre, description, images) {
    var modal = document.getElementById('fenetre-modal');
    var titreActivite = document.getElementById('titre-activite');
    var contenuActivite = document.getElementById('contenu-activite');

 
    titreActivite.textContent = titre;

 
    contenuActivite.innerHTML = "<p>" + description + "</p>";

    images.forEach(function(image) {
        contenuActivite.innerHTML += "<img src='" + image + "' alt='Image de l\'activité' class='image-activite'>";
    });

    modal.style.display = 'block'; 
}

function fermerFenetreModal() {
    var modal = document.getElementById('fenetre-modal');
    modal.style.display = 'none'; 
}

function ouvrirPreuvesModal(images) {
    var modal = document.getElementById('preuves-modal');
    var contenuPreuves = document.getElementById('preuves-contenu');


    contenuPreuves.innerHTML = '';

 
    images.forEach(function(image) {
        contenuPreuves.innerHTML += "<img src='" + image + "' alt='Preuve de l\'activité' class='preuve-image'>";
    });

    modal.style.display = 'block'; 
}

function fermerPreuvesModal() {
    var modal = document.getElementById('preuves-modal');
    modal.style.display = 'none'; 
}

