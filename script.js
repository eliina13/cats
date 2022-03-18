//console.log(3)
const API = 'https://cataaplikacija.eliina13.repl.co/'
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
