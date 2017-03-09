anonyme = function() {
    console.log("Fonction anonyme");
};

function unNom() {
    console.log("Fonction pas anonyme");
}

function execute(cb) {
    var unTrucAdire = "coucou";
    cb(unTrucAdire);
}

function callback(msg) {
    console.log("callback: ", msg);
}

function unAutreTruc(msg) {
    var char = msg[0];
    console.log("callback2: ", char);
}




var truc = "coucou";

function callback() {
    truc = "pas coucou";
    console.log(truc);
}

execute(callback);
console.log(truc);