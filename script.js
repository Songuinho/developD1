// etudiant = [
//     {
//         'nom':'Songue',
//         'id':1,
//         'filiere':"GSI"
//     },
//     {
//         'nom':'LT',
//         'id':2,
//         'filiere':"GSI"
//     },
//     {
//         'nom':'Peguy',
//         'id':3,
//         'filiere':"GL"
//     }
// ]
        // JSON: Java Script Object Notation
        // AJAX: Asynchronous JavaScript And Xml 
// for(i=0; i<=etudiant.length; i++){
//     console.log(etudiant[i].nom, etudiant[i].filiere);
// }

//XMLHttpRequest // permet la connexion a un serveur pour le partage des donnees.

//intanciation -->New
var xhr = new XMLHttpRequest();
//reception: open(method, url, asynch)
var index = 0;  


//pour afficher le text apres avoir cliquer sur le bouton
var btn = document.getElementById('btn');
var test = document.getElementById('para');
btn.addEventListener('click', function () {
    xhr.open('GET','test'+index+'.json', true);
    xhr.onload = function(){
        var donnee = JSON.parse(xhr.responseText);
        console.log(donnee);
        Render(donnee);
    };
    xhr.send();
    index++;
    if (index>1) {
        btn.style.display = 'none'; //si on a deja cliquer plus de 2 fois le bouton disparait.
    }
});

function Render(data){
    for (let i = 0; i < data.length; i++) {
        var donneeString = `<p> l'eleve ${data[i].nom} dont identifiant est ${data[i].id}, frequente a  ${data[i].ecole} et sa filiere est ${data[i].filiere} </p>`;
        test.insertAdjacentHTML('beforeend', donneeString)
    }
}
var git = new XMLHttpRequest();

git.open('GET','https://api.github.com/users', true);
git.onload = function(){
    console.log(JSON.parse(git.responseText));
}
git.send();