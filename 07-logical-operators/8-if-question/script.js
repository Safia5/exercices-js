/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
if (-1 || 0) alert( 'first' );// va s'executer car -1 est une valeur True 
if (-1 && 0) alert( 'second' );//0 false valeur fausse doncil ne s'execute pas 
if (null || -1 && 1) alert( 'third' );// va s'exécuter car -1&&1 il prend celui de gauche donc 1 puis il fait null || 1 = null.