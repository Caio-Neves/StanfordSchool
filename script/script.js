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

// ----------- FEITO POR BRUNO MELO -----------

//*cont que faz a formatacao e envia para o terceiro passo = Bruno Melo=*//
const formato = {
    phone(value){
        return value
        .replace(/\D/g,'')

        .replace(/(\d{2})(\d)/,'($1)$2')

        .replace(/(\d{4})(\d)/,'$1-$2')

        .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')

        .replace(/(-\d{4})\d+?$/,'$1')
    }
}

//*identifica tods os campos input e pecore com o For*//
document.querySelectorAll('input').forEach(($input)=>{

//*Armazena e formata o valo recebido paa pegar o que esta dentro de data-js*//
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        //*Enviar o valor ja formatado para o input atualizado em cada interacao*//
        e.target.value = formato[field](e.target.value)
    },false)

})


   
function questao(){
    alert( "Sua dúvida foi encaminhada com sucesso! Em breve entramos em contato!")   
};

// ----------- FEITO POR BRUNO WILKE -----------

let ano = document.getElementById('anoInicio');
let turma = document.getElementById('turma');
let anos = [2022,2023,2024,2025];
let turmas = [
    "Infantil",
    "1º Ano Fundamental",
    "2º Ano Fundamental",
    "3º Ano Fundamental",
    "4º Ano Fundamental",
    "5º Ano Fundamental",
    "6º Ano Fundamental",
    "7º Ano Fundamental",
    "8º Ano Fundamental",
    "9º Ano Fundamental",
    "1ª Série Ensino Médio",
    "2ª Série Ensino Médio",
    "Terceirão"]

window.addEventListener('load', function(){
    criarOptions(ano,anos);
    criarOptions(turma, turmas);
})
function criarOptions(idSelect, dados){
    let options = '<option value="">---</option>'
    for (const key in dados) {
        options += `<option value="${key}">${dados[key]}</option>`;
    } 
    idSelect.innerHTML = options;
}