async function injectContentHome(){

    let url = location.href; 
    file = url.split('='); 
    const resp = await fetch (`pages/index.html`);
    const html = await resp.text(); 
    // let inject = document.getElementById('content');
    // inject.innerHTML =html;
}

async function injectContent(){

    let url = location.href; //Pega o endereço da URL
    file = url.split('='); //Divide o endereço pelo = e aplica os valores como array
    const resp = await fetch (`pages/${file[1]}.html`);//Pega o valor após o = da URL e aplica no fetch
    const html = await resp.text(); //Converte o resultado do fetch para texto
    let inject = document.getElementById('content'); //Seleciona o destino para carregar o html
    inject.innerHTML =html;
}


function activeLink(){
    let url = Location.href;
    let view = url.split('=')
    let sessao = (view[1] != undefined) ? view[1] : 'inicio';
    document.getElementById(sessao).className += ' active';
}

injectContent();
activeLink();