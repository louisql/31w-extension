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
    $contenu = "
        <style>
        .carrousel {
            border: 2px solid #aaa;
            background-color: #0f0;
            width: 200px;
            height: 200px;
        }
        </style>
        <div class='carrousel'>Carrousel</div>";
    
    return $contenu;
 }
 add_shortcode('lq_carrousel', 'genere_boite');