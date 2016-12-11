badgesHTML = prompt('combien de badges HTML as tu ?');
badgesCSS = prompt('combien de badges CSS as tu ?');
totalbadge = parseInt(badgesHTML)+parseInt(badgesCSS);
alert('WOW, TU AS '+totalbadge+'!');x

var lieu1= "boston";
var lieu2 = "USA";
var total = (lieu1) + (lieu2);
alert ('le lieu est'+total);

var prenom="gael";
var nom="billot";
var total= (prenom)+(nom);
alert('je m appelle'+total);


//un jour un singe dyslexique ayant perdu la vue qui s'appelle jean marc//
var animal;
var maladie;
var sens;
var nom;
var questions = 4;

alert('Bonjour,nous allons vous poser une série de questions.');
nom = prompt('il vous reste '+questions+'questions.Comment t\'appelles tu');
questions -=1;
maladie = prompt('il vous reste '+questions+'questions.cite moi une maladie');
questions -=1;
animal = prompt('il vous reste '+questions+'questions.quel est ton animal préféré');
questions -=1;
sens = prompt('il vous reste '+questions+'questions.Peux tu me citer un des 5 sens?');
questions -=1;
alert('un jour un/une' +animal+' atteint du '+maladie+' ayant perdu le/la/l\'' +sens+' qui s\'appelait '+nom+'.')




var questions=4;
var tab = new Array;



alert('Bonjour,nous allons vous poser une série de questions.');
tab.push(prompt('il vous reste '+questions+'questions.Comment t\'appelles tu'));
questions -=1;
tab.push(prompt('il vous reste '+questions+'questions.cite moi une maladie'));
questions -=1;
tab.push(prompt('il vous reste '+questions+'questions.quel est ton animal préféré'));
questions -=1;
tab.push(prompt('il vous reste '+questions+'questions.Peux tu me citer un des 5 sens?'));
questions -=1;
alert('un jour un/une' +tab[2]+' atteint du '+tab[1]+' ayant perdu le/la/l\'' +tab[3]+' qui s\'appelait '+tab[0]+'.')



>tab
var tab = ['chat','chien', 2 ]
tab[0]
'chat'


var mesAnimaux =[{animal:"chat", nom:"grenouille", couleur:"gris"}, {animal:"rat", nom:"pat", couleur:"gris"}];
 


 var tab =["animal","maladie","sens","nom"]
 var questions=[]