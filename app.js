const prompt = require('prompt-sync')();
 
var start = prompt('Do you want start ? (yes or no)');

while((start != "yes")&&(start != "no")){
    var start = prompt('/!\\ yes or no /!\\ \nDo you want start ?');
}

var jeu = [1,3,5,7]

function AfficherJeu(){
    var ligne0 = "*********" 
    var ligne1 = "*   |   *"
    var ligne2 = "*  |||  *"
    var ligne3 = "* ||||| *"
    var ligne4 = "*|||||||*"
    var ligne5 = "*********"

    if(jeu[0]!=1){ligne1=ligne1.replace("|"," ")} 
    if(jeu[1]!=3){
        for (let i = 0; i < (3-jeu[1]); i++) {
            ligne2=ligne2.replace("|"," ")
        }
    }
    if(jeu[2]!=5){
        for (let i = 0; i < (5-jeu[2]); i++) {
            ligne3=ligne3.replace("|"," ")
        }
    }
    if(jeu[3]!=7){
        for (let i = 0; i < (7-jeu[3]); i++) {
            ligne4=ligne4.replace("|"," ")
        }
    }


    var plateau = ligne0 + "\n" + ligne1 + "\n" + ligne2 + "\n" + ligne3 + "\n" + ligne4 + "\n" + ligne5 

    return plateau
}

function Jouer(balance){

    if(balance=="yes"){

        console.log("Your turn:");

        var line = prompt('Line: ');
        var possibilites = [1,2,3,4]
        while(!possibilites.includes(parseInt(line))||(jeu[line-1]<1)){
            var line = prompt('/!\\ 1 or 2 or 3 or 4 with 1+ match /!\\ \nLine: ');
        }

        var matches = prompt('Matches: ');
        while((matches<1)||(matches>jeu[line-1])){
            var matches = prompt('/!\\ 1 - '+jeu[line-1]+' for line '+line+' /!\\ \nMatches: ');
        }

        jeu[line-1] = jeu[line-1] - matches

        console.log("Player removed "+matches+" match(es) from line "+line)
    
    }else{
        console.log("AI’s turn...")

        var line = Math.floor(Math.random() * 4)+1;
        while(jeu[line-1]<1){
            var line = Math.floor(Math.random() * 4)+1;
        }

        var matches = Math.floor(Math.random() * jeu[line-1])+1;

        jeu[line-1] = jeu[line-1] - matches

        console.log("AI removed "+matches+" match(es) from line "+line)
    }
}
console.log(AfficherJeu())
while((jeu[0]!=0)||(jeu[1]!=0)||(jeu[2]!=0)||(jeu[3]!=0)){
    Jouer(start)
    console.log(AfficherJeu())
    if(start=="yes"){start="no"}else{start="yes"}
}

if(start=="yes"){
    console.log("Bien ouej khoya !!!!!!")
}else{
    console.log("Tu as perdu contre un bot qui joue aléatoirement ... Trop naz le type")
}