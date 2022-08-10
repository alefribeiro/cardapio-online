const btn = document.querySelector(".btn");

window.addEventListener('load', () => {
    btn.classList.add("invisible")
})

addEventListener('scroll', (e) =>{

    if(window.scrollY === 0){
        btn.classList.add("invisible")
    }else{
        btn.classList.remove("invisible")
    }
})

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});



// footer
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const anoAtualElemento = document.querySelector('footer')

anoAtualElemento.innerHTML = ` © ${anoAtual} Todos direitos reservados - Arena Society Maravilha - Produto criado por Álef Ribeiro `
