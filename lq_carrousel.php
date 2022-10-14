<?php
/**
 *  package Carrousel
 * version 1.0.0 
 */

 /*
 * Plugin name: LQ_carrousel
 * Version 1.0.0
 */

/* filemtime()  // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook */

function lqc_enqueue(){
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style("lqc_style_carrousel",
                        plugin_dir_url(__FILE__)."style.css",
                        array(),
                        $version_css,
                        false);
    wp_enqueue_script("lqc_js_carrousel",
                        plugin_dir_url(__FILE__)."js/carrousel.js",
                        array(),
                        $version_js,
                        true);
}

add_action('wp_enqueue_scripts', 'lqc_enqueue');


 function genere_boite(){
    $contenu = "
        <button class='btn_modale'>boite modale</button>
        <div class='carrousel'>Carrousel
        <button class='btn_fermer'>X</button>
        </div>";
        
    
    return $contenu;
 }
 add_shortcode('lq_carrousel', 'genere_boite');

// function lqc_enqueue()
// {
//     $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
//     $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
//     wp_enqueue_style(
//         "lqc_style_carrousel",
//         plugin_dir_url(__FILE__) . "style.css",
//         array(),
//         $version_css,
//         false
//     );

//     wp_enqueue_script(
//         "lqc_js_carrousel",
//         plugin_dir_url(__FILE__) . "js/carrousel.js",
//         array(),
//         $version_js,
//         false
//     );
// }

// add_action('wp_enqueue_scripts', 'lqc_enqueue');

// function genere_boite()
// {
//     $contenu = "
//                 <div class='carrousel'>Carrousel</div>
//                 ";
//     return $contenu;
// }

// add_shortcode('lq_carrousel', 'genere_boite');