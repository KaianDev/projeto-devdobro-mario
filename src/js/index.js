/* 
OBJETIVO 1 - quando o usuário clicar no botão veja o trailer, devemos abrir a modal com o video do trailer
-passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
-passo 2 - dar um jeito de identificar quando o usuário clicar no botão
-passo 3 - dar um jeito de pegar o elemento modal no JS
-passo 4 - abrir modal

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
-passo 2.1 - dar um jeito de pegar o elemento de fechar modal o JS
-passo 2.2 - dar um jeito de identificar quando o usuário clicar no X
-passo 2.3 - fechar a modal


*/



const botaoTrailer = document.querySelector(".botao-trailer");
const fecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById('video');
const linkVideo = video.src;

function alterar(){
    modal.classList.toggle("aberto");
};


botaoTrailer.addEventListener("click",()=>{
    alterar()
    video.setAttribute("src",linkVideo);
});


fecharModal.addEventListener("click",()=>{
    alterar();
    video.setAttribute("src","");
});



