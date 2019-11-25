var lieux = ['à Tombouctou', 'à Lille', 'à Sataya', 'à Montcuq', 'à Paris' , 'à Batcave', 'à Maubeuge', 'dans un réacteur nucléaire',
    'à Martinique', 'à Balamb garden', "dans l'enfer", 'à Montbeilard', 'sur Namek', 'à Londres', 'sur une île', 'dans une cave', 'à Le Caire',
    'à New York', 'à Le tampon', 'à Berlaimont',];
var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, 27, -100, 55 ];
var objet = ['une valise','un poivier connecté','une épée','un cahier','un pneu','une table','un godsabre','une truelle','une madelaine',
    'un trident','un pull','une rose','un pc','un tisonnier','une guimbarde','un chandelier','un verre','une bancale','un arbre',
    'une souris','une dague'];
var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer Simpson", "Kylian", "Georges-Clooney", "Quintus",
    "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var verbes = ['danser pour' ,'frapper avec' ,'lubrifier', 'trikiter', 'procrastiner avec', 'se foutre', 'se prendre avec', 'nager avec',
    'recoudre', 'punir avec', 'attaquer avec', 'coder avec', 'jouer avec', 'manger', 'avoir'];



var ul=document.getElementById("list");
var mydiv=document.getElementById("mydiv");

document.getElementById("go").addEventListener("click",function () {
    var aleaLieux= lieux[Math.floor(Math.random()*lieux.length)];
    var aleaTemperatures=temperatures[Math.floor(Math.random()*temperatures.length)] ;
    var aleaObjets=objet[Math.floor(Math.random()*objet.length)];
    var aleaNoms=noms[Math.floor(Math.random()*noms.length)];
    var aleaVerbes=verbes[Math.floor(Math.random()*verbes.length)];
    var newp=document.createElement("p");
    newp.innerHTML=aleaNoms+" s'amuse a "+aleaVerbes+" " +aleaObjets+" alors qu'on se trouve "+aleaLieux+" et qu'il y fait "+aleaTemperatures+" °C ! ";
    mydiv.appendChild(newp);
});


function show(button,liste) {
    document.getElementById(button).addEventListener("click",function () {
        while(ul.firstChild){
            ul.removeChild(ul.lastChild);
        }
       var newdiv=document.createElement("div") ;
        document.getElementById("show-list").appendChild(newdiv);
        for(var i=0;i<liste.length;i++){
            var newli=document.createElement("li");
            document.getElementById("list").appendChild(newli);
            newli.innerHTML=liste[i];
        }
        var masquer=document.createElement("li");
        document.getElementById("list").appendChild(masquer);
        masquer.innerHTML="masquer";
        masquer.id="masquer";
        document.getElementById("masquer").addEventListener("click",function () {
            while(ul.firstChild){
                ul.removeChild(ul.lastChild);
            }
        });
    })
}
function add(button,liste){
    document.getElementById(button).addEventListener("click",function () {
        var entry=document.getElementById("entry").value;
        liste.push(entry);
    })
}

function suprim(button,liste){
    document.getElementById(button).addEventListener("click",function () {
        liste.pop();
    })
}

document.getElementById("button-add").addEventListener("click",function () {
    document.getElementById("add-list").style.display="block";
});
document.getElementById("button-cacher").addEventListener("click",function () {
    document.getElementById("add-list").style.display="none";
});



suprim("button-delete-lieu",lieux);
suprim("button-delete-temperature",temperatures);
suprim("button-delete-objet",objet);
suprim("button-delete-nom",noms);
suprim("button-delete-verbe",verbes);
add("button-add-lieu",lieux);
add("button-add-temperature",temperatures);
add("button-add-objet",objet);
add("button-add-nom",noms);
add("button-add-verbe",verbes);
show("button-show-lieu",lieux);
show("button-show-temperature",temperatures);
show("button-show-objet",objet);
show("button-show-nom",noms);
show("button-show-verbe",verbes);

