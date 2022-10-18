(function(){
    console.log("carrousel")
    /*---------------------------------------- Les éléments du carrousel */

    /*Le conteneur principal du carrousel */
    let elmCarrousel = document.querySelector(".carrousel");

    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModale = document.querySelector(".btn_modale");
    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");

    /* figure qui contiendra l'ensemble  des images du carrousel */
    let elmCarrousel__figure = document.querySelector('.carrousel__figure');

    /* Le formulaire qui contiendra l'ensemble des boutons radio*/
    let elmCarrousel__form = document.querySelector('.carrousel__form');

    /*---------------------------------------- Les éléments de la galerie */
        /*Le conteneur principal de la galerie */
    let elmGalerie = document.querySelector(".galerie")



    elmBtnModale.addEventListener('mousedown', function(){
        console.log("bouton boite modale")
        elmCarrousel.classList.add("carrousel--ouvrir")
    })
    
    elmBtnModaleFermer.addEventListener('mousedown', function(){
        console.log("bouton boite modale")
        elmCarrousel.classList.remove("carrousel--ouvrir")
    })
})()