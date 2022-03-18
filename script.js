//console.log(3)
let zina = document.querySelector('.manaZina');
let zinas= document.querySelector('.chataZinas');

function sutittZinu(){
    console.log('Sutiīt ziņu()darbojas');
   zinas.innerHTML = zinas.innerHTML + '<br/>'+ zina.value ;
}

async function ieladetChataZinas(){
    let datiNoServera = await fetch('catazinas.txt');
    let dati =await datiNoServera.text();
    zinas.innerHTML = dati;
}
setInterval(ieladetChataZinas, 1000)