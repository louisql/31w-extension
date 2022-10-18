(function(){
    console.log("carrousel")
    /*---------------------------------------- Les éléments du carrousel */

    /*Le conteneur principal du carrousel */
    let elmCarrousel = document.querySelector(".carrousel");

    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModale = document.querySelector(".btn_modale");
    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");
    elmBtnModale.addEventListener('mousedown', function(){
        console.log("bouton boite modale")
        elmCarrousel.classList.add("carrousel--ouvrir")
    })
    
    elmBtnModaleFermer.addEventListener('mousedown', function(){
        console.log("bouton boite modale")
        elmCarrousel.classList.remove("carrousel--ouvrir")
    })
})()