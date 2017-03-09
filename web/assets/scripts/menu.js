/*
* Les variables sont non typées
* Elles sont accessibles dans un bloc de fonction
* Callback = une fonction dans une autre
* Une closure , on capture une reference
*/

function Fct() {
    // Accessible dans la 2eme fonction car variable globale
    var a = 12;
    // Ici on instancie une fonction privée 
    function fct1() {
        var a = 18;
        console.log('Fonction interne', a);
    }

    
    fct1();
    console.log("Fonction principale", a);
}