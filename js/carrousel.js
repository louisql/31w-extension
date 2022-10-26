(function () {
  console.log("carrousel");
  /*---------------------------------------- Initialisation des compteurs */
  let index = 0;
  let dernierIndex = -1;

  /*---------------------------------------- Les éléments du carrousel */

  /*Le conteneur principal du carrousel */
  let elmCarrousel = document.querySelector(".carrousel");

  /* Bouton temporaire pour ouvrir le carrousel */
  let elmBtnModale = document.querySelector(".btn_modale");
  /* Bouton temporaire pour ouvrir le carrousel */
  let elmBtnModaleFermer = document.querySelector(".btn_fermer");

  /* Bouton pour accéder à la photo suivante sur le carrousel */
  let elmBtnModaleSuivant = document.querySelector(".btn_droite");
  
  /* Bouton pour accéder à la photo précédente sur le carrousel */
  let elmBtnModalePrecedent = document.querySelector(".btn_gauche");


  /* figure qui contiendra l'ensemble  des images du carrousel */
  let elmCarrousel__figure = document.querySelector(".carrousel__figure");

  /* Le formulaire qui contiendra l'ensemble des boutons radio*/
  let elmCarrousel__form = document.querySelector(".carrousel__form");

  /*---------------------------------------- Les éléments de la galerie */
  /*Le conteneur principal de la galerie */
  let elmGalerie = document.querySelector(".galerie");
  let elmGalerieImg = document.querySelectorAll(".galerie figure img");

  /*---------------------------------- Étape 1 parcourir les images de la gallerie */
  for (const elmImg of elmGalerieImg) {
    
    console.log(elmImg.getAttribute("src"));
    elmImg.dataset.index = index;
    ajouter_img_carrousel(elmImg);
    ajouter_radio_carrousel();
    elmImg.addEventListener('mousedown', function(){
      console.log('galerie');
      let imageActive = document.querySelector(".carrousel__figure__img--activer");
      if (imageActive !== null)
      { 
      console.log(imageActive)
      let indexActif = imageActive.dataset.index;
      console.log(indexActif)
      
      imageActive.classList.remove(
        "carrousel__figure__img--activer"
        );
      }
        console.log('elmImg.dataset.index ', this.dataset.index)
        elmCarrousel.classList.add("carrousel--ouvrir");
        elmCarrousel__figure.children[this.dataset.index].classList.add(
            "carrousel__figure__img--activer"
          );
          elmCarrousel__form.children[this.dataset.index].checked = true;
        dernierIndex = this.dataset.index;
    })
  }

  /**
   *  ajoute une image au carrousel
   * @param {*} elmImg une image de la galerie
   */

  function ajouter_img_carrousel(elmImg) {
    //elmImg représente une image de la galerie
    elmImg.dataset.index = index;

    let elmCarrousel__figure__img = document.createElement("img");
    elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
    elmCarrousel__figure__img.classList.add("carrousel__figure__img");
    elmCarrousel__figure__img.dataset.index = index;
    elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
  }

  /**
   * Ajoute un radio bouton dans le carrousel
   */

  function ajouter_radio_carrousel() {
    let elmCarrousel__form__radio = document.createElement("input");
    elmCarrousel__form__radio.setAttribute("name", "carrousel__form__radio");
    elmCarrousel__form__radio.setAttribute("classe", "carrousel__form__radio");
    elmCarrousel__form__radio.setAttribute("type", "radio");
    elmCarrousel__form__radio.dataset.index = index;
    index++;
    elmCarrousel__form.appendChild(elmCarrousel__form__radio);

    /*------------------------ écouteur sur radio pour afficher une nouvelle image */
    elmCarrousel__form__radio.addEventListener("mousedown", function () {
      console.log(this.dataset.index);

      if (dernierIndex != -1) {
        elmCarrousel__figure.children[dernierIndex].classList.remove(
          "carrousel__figure__img--activer"
        );
      }

      if(this.dataset.index != 0){
        console.log('test retrait classe')
        elmCarrousel__figure.children[0].classList.remove(
          "carrousel__figure__img--activer"
        );
      }


      elmCarrousel__figure.children[this.dataset.index].classList.add(
        "carrousel__figure__img--activer"
      );

      console.log(index)
      dernierIndex = this.dataset.index;
    });
  }

  elmBtnModale.addEventListener("mousedown", function () {
    console.log("bouton boite modale");
    elmCarrousel.classList.add("carrousel--ouvrir");
    elmCarrousel__figure.children[0].classList.add(
      "carrousel__figure__img--activer"
    );
  });

  elmBtnModaleFermer.addEventListener("mousedown", function () {
    console.log("bouton boite modale");
    elmCarrousel.classList.remove("carrousel--ouvrir");
  });

  elmBtnModalePrecedent.addEventListener("mousedown", function () {
    let imageActive = document.querySelector(".carrousel__figure__img--activer");
    console.log(imageActive)
    let indexActif = imageActive.dataset.index;
    console.log(indexActif)

    elmCarrousel__figure.children[indexActif].classList.remove(
      "carrousel__figure__img--activer"
    );

    if (indexActif != 0) indexActif--;
    else indexActif = index - 1 ;

    elmCarrousel__figure.children[indexActif].classList.add(
      "carrousel__figure__img--activer"
    );
    elmCarrousel__form.children[indexActif].checked = true;
  })

  elmBtnModaleSuivant.addEventListener("mousedown", function () {
    let imageActive = document.querySelector(".carrousel__figure__img--activer");
    console.log(imageActive)
    let indexActif = imageActive.dataset.index;
    console.log(indexActif)

    elmCarrousel__figure.children[indexActif].classList.remove(
      "carrousel__figure__img--activer"
    );

    if (indexActif != index -1 ) indexActif++;
    else indexActif = 0;


    elmCarrousel__figure.children[indexActif].classList.add(
      "carrousel__figure__img--activer"
    );
    elmCarrousel__form.children[indexActif].checked = true;

  })

})();
