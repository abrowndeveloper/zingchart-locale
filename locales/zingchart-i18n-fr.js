(function(){
  var locale = {
  	'rtl' : false,
  	'decimals-separator' : ',',
  	'thousands-separator' : '',
  	'menu-reload' : 'Recharger',
  	'menu-print' : 'Imprimer Graph',
  	'menu-viewaspng' : 'Visionner en PNG',
  	'menu-viewasjpg' : 'Visionner en JPG',
  	'menu-downloadpdf' : 'Télécharger PDF',
  	'menu-downloadsvg' : 'Télécharger SVG',
  	'menu-exportdata' : 'Exporter Données',
  	'menu-zoomin' : 'Zoom Avant',
  	'menu-zoomout' : 'Zoom Arrière',
  	'menu-viewall' : 'Voir Tout',
  	'menu-viewsource' : 'Voir Source',
  	'menu-bugreport' : 'Signaler Bug',
  	'menu-switchto2d' : 'Passer en 2D',
  	'menu-switchto3d' : 'Passer en 3D',
  	'menu-showguide' : 'Montrer Guide',
  	'menu-hideguide' : 'Cacher Guide',
  	'menu-switchtolin' : 'Montrer Echelle Linéaire',
  	'menu-switchtolog' : 'Show Echelle Logarithmique',
  	'menu-fullscreen' : 'Plein Ecran',
  	'menu-exitfullscreen' : 'Quitter Plein Ecran',
  	'menu-goback' : 'Précédent',
  	'menu-goforward' : 'Suivant',
  	'date-formats' : {
  		'msecond' : '%D %M %Y<br>%H:%i:%s<br>%q ms',
  		'second' : '%D %M %Y<br>%H:%i:%s',
  		'minute' : '%D %M %Y<br>%H:%i',
  		'hour' : '%D %M %Y<br>%Hh',
  		'day' : '%D %M %Y',
  		'month' : '%M %Y',
  		'year' : '%Y'
  	},
  	'days-short' : ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  	'days-long' : ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  	'months-short' : ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juill', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
  	'months-long' : ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  	'sync-wait' : 'Un instant...',
  	'export-wait' : 'Export en cours...',
  	'progress-wait-long' : 'Veuillez patienter...',
  	'progress-wait-short' : 'Chargement...',
  	'progress-wait-mini' : '...',
  	'error-header' : 'Une erreur est survenue',
  	'error-message' : 'Message d\'erreur:',
  	'error-close' : 'Fermer',
  	'bugreport-header' : 'Rapport de bug',
  	'bugreport-senddata' : 'Envoi de données JSON',
  	'bugreport-sendcapture' : 'Envoyer prise de vue Graph',
  	'bugreport-yourcomment' : 'Votre commentaire:',
  	'bugreport-jsondata' : 'Données JSON:',
  	'bugreport-youremail' : 'Votre adresse mail',
  	'bugreport-infoemail' : 'si vous voulez recevoir par mail notre réponse concernant votre problème',
  	'bugreport-emailmandatory' : 'L\'adresse mail est obligatoire...',
  	'bugreport-submit' : 'Envoyer',
  	'bugreport-cancel' : 'Annuler',
  	'bugreport-confirm' : 'Votre rapport de bug a été envoyé.\n\nMerci!',
  	'about-close' : 'Fermer',
  	'viewsource-jsonsource' : 'JSON parcouru',
  	'viewsource-originalsource' : 'JSON original',
  	'viewsource-close' : 'Fermer',
  	'viewsource-apply' : 'Appliquer',
  	'viewimage-close' : 'Fermer',
  	'legend-pagination' : 'Page %page% sur %pages%'
  };
  
  if (typeof zingchart !== 'undefined') {
    zingchart.i18n.fr = locale;
  }
  else if (typeof window === 'undefined' && module.exports !== 'undefined'){
    module.exports = locale;
  }
})();
