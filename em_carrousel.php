<?php
/**
 *  package Carrousel
 * version 1.0.0 
 */

 /*
 * Plugin name: LQ_carrousel
 * Version 1.0.0
 */

 function genere_boite(){
    $contenu = "<div class='carrousel'>Carrousel</div>";
    return $contenu;
 }
 add_shortcode('lq_carrousel', 'genere_boite');