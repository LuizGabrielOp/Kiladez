const containerSrc = document.getElementById('advanced-src')

function advancedSrc(){
    if (containerSrc.classList.contains('animGo')) {
        containerSrc.classList.remove('animGo');
        containerSrc.classList.add('animBack');
    } else {
        containerSrc.classList.add('animGo');
        containerSrc.classList.remove('animBack');
    }
}
function getValue() {

    let wife = document.getElementById('wife');
    let cord = document.getElementById('cord');
    let cordValue = cord.value;
    let bdayValue = wife.value;
    let cidade = document.getElementById('cidade');
    let pais = document.getElementById('pais');
    let cidadeValue = cidade.value;
    let paisValue = pais.value;

    containerSrc.classList.remove('animGo');
    containerSrc.classList.add('animBack');
    if(bdayValue == '2024-12-31'){
        window.open('https://i.ibb.co/LkSP1gR/Whats-App-Image-2024-06-06-at-1-05-35-AM.jpg');
    }
    if(cordValue == '-23,566898, -46,801271'){
        window.open('https://i.ibb.co/LkSP1gR/Whats-App-Image-2024-06-06-at-1-05-35-AM.jpg');
    }
    else if(cordValue == 'suicidio'){
        alert('pensamentos suicidas totais: 10, ultima atualização em 09/06/2024 as 20:41')
    }
    console.log(cidadeValue)
    console.log(paisValue)
    if(cidadeValue == "milan" || cidadeValue == "Milan" || cidadeValue == "milão" || cidadeValue == "Milão"){
        window.location.href = '../italia/milano/milano.html'
    }
    else if(cidadeValue == "Foz do iguaçu" || cidadeValue == "foz" || cidadeValue == "Foz" || cidadeValue == "iguaçu"){
        window.location.href = '../brasil/fdi/fdi.html'
    }
    else if(cidadeValue == "Maranhão" || cidadeValue == "Maranhao" || cidadeValue == "maranhão" || cidadeValue == "maranhao"){
        window.location.href = '../brasil/maranhao/maranhao.html'
    }
    else if(cidadeValue == 'RJ' || cidadeValue == "rj" || cidadeValue == "Rio" || cidadeValue == "Rio de janeiro"){
        window.location.href = '../brasil/RJ/rj.html'
    }
    else if(cidadeValue == 'Wiltshire' || cidadeValue == "wiltshire"){
        window.location.href = '../inglaterra/wiltshire/wiltshire.html'
    }

    if(paisValue == "italia" || paisValue == "itália" || paisValue == "Italia" || paisValue == "Itália" || paisValue == "italy" || paisValue == "Italy"){
        window.location.href = '../italia/italia.html'
    }
    else if(paisValue == 'Brasil' || paisValue == "brasil" || paisValue == "Brazil" || paisValue == "brazil"){
        window.location.href = '../brasil/brasil.html'
    }
    else if(paisValue == 'Inglaterra' || paisValue == "inglaterra" || paisValue == "England" || paisValue == "england"){
        window.location.href = '../inglaterra/inglaterra.html'
    }
}
function brasil(){
    window.location.href = '../brasil/brasil.html'
}
function italia(){
    window.location.href = '../italia/italia.html'
}
function inglaterra(){
    window.location.href = '../inglaterra/inglaterra.html'
}