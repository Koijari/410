// Versio 1 
// Nimien lukeminen ja tulostus

let nimilista = [],
    x = 1

function lisaaNimi(){
    if (nimilista != []){
        document.getElementById('tulostus').innerText = ''
        }

    while (x<=10){
        let nimi = prompt('Anna kaverin nimi')
        if (nimi != ""){
            nimilista.push(nimi)
            x++
        }
    }
    tulostaNimet()
}

function tulostaNimet(){
    for (x = 1; x <= nimilista.length; x++){
        let nimet = `${x}.  ${nimilista[x-1]}\n`
        document.getElementById('tulostus').innerText += nimet
    }
}

// Versio 2
// Nimen lisääminen

function lisaaNimet(){    
    let nimi = document.querySelector("input").value
    if (nimilista.includes(nimi)){ 
        alert('Nimi on jo listassa')
    }
    if (nimi != ""){
        nimilista.push(nimi)
        document.getElementById("tulostus").innerText = ''
        tulostaNimet()
    }
}

// Nimen poistaminen

function poistaNimi(){
    let nimi = document.querySelector("input").value
    if (nimilista.includes(nimi)){      
        let paikka = nimilista.indexOf(nimi)
        nimilista.splice(paikka, 1)
        document.getElementById("tulostus").innerText = ''
        tulostaNimet()
    }
}

// Aakkosjärjestys

function jarjestaNimet(){
    nimilista.sort()
    document.getElementById("tulostus").innerText = ''
    tulostaNimet()
}