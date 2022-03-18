//console.log(3)
<<<<<<< HEAD
const API = 'https://cataaplikacija.eliina13.repl.co'

=======
const API = 'https://cataaplikacija.eliina13.repl.co/'
>>>>>>> c67416f1230bf932b3243644dee422e8a48fe9c5
let zina = document.querySelector('.manaZina');
let zinas= document.querySelector('.chataZinas');

function sutittZinu(){
    console.log('Sutiīt ziņu()darbojas');
   zinas.innerHTML = zinas.innerHTML + '<br/>'+ zina.value ;
}

async function ieladetChataZinas(){
    let datiNoServera = await fetch(API + '/lasit');
    let dati =await datiNoServera.text();
    zinas.innerHTML = dati;
}
setInterval(ieladetChataZinas, 1000)
